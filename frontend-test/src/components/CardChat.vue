<template>
  <v-row class="mx-0">
    <v-col cols="12" class="card__container px-0">
      <v-card class="py-3 px-3">
        <h1 class="card__title">{{ cardItem.drawer.question.type }}</h1>
        <p class="card__message" v-if="!isEditing">
          {{ cardItem.drawer.question.content }}
        </p>
        <v-text-field
          type="text"
          v-model="cardContent"
          label="Outlined"
          outlined
          v-else
        ></v-text-field>

        <div
          class="d-flex flex-wrap mx-0 justify-space-around justify-md-center"
        >
          <v-btn
            color="deep-orange"
            class="white--text mx-2 my-2"
            @click="isEditing = true"
            v-if="!isEditing"
            >Editar</v-btn
          >
          <v-btn
            color="green"
            class="white--text mx-2 my-2"
            @click="saveCard"
            v-else
          >
            Guardar
          </v-btn>
          <v-btn
            color="primary"
            class="mx-2 my-2"
            @click="(isActivated = true), (existChilds = true)"
            v-if="!isActivated"
          >
            Continuar
          </v-btn>
          <v-btn
            class="white--text mx-2 my-2"
            color="red"
            @click="$emit('click:on'), (existChilds = false)"
          >
            Eliminar
          </v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="existChilds" class="px-0 mt-3">
      <component :is="'CardChat'" :cardItem="card" @click:on="deleteCard">
      </component>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CardChat",
  props: {
    cardItem: Object,
  },
  data() {
    return {
      isEditing: false,
      isActivated: false,
      existChilds: false,
      card: null,
      cardContent: "",
    };
  },
  created() {
    console.log(this.cardItem);
    this.cardContent = this.cardItem.drawer.question.content;
    this.card = this.getCardBySourceId(this.cardItem._id);
    if (!this.card) {
      this.isActivated = true;
      this.existChilds = false;
    }
  },
  methods: {
    ...mapActions(["editCard"]),
    deleteCard() {
      this.existChilds = false;
      this.isActivated = false;
    },
    async saveCard() {
      console.log(this.cardItem._id);
      await this.editCard({ content: this.cardContent, id: this.cardItem._id });
      this.isEditing = false;
    },
  },
  computed: {
    ...mapGetters(["getCards", "getCardBySourceId"]),
  },
};
</script>

<style>
.card__title {
  font-size: 1.2rem;
}
.card__message {
  font-size: 1rem;
}
</style>
