<template>
  <div>
    <div class="card__container">
      <h1 class="card__title">{{ cardItem.drawer.question.type }}</h1>
      <p class="card__message">{{ cardItem.drawer.question.content }}</p>

      <div class="card__button">
        <button @click="existChilds = true" v-if="!existChilds">
          Continuar
        </button>
        <button @click="$emit('click:on'), (existChilds = false)">
          Eliminar
        </button>
      </div>
    </div>
    <div v-if="existChilds">
      <component :is="'CardChat'" :cardItem="card" @click:on="deleteCard">
      </component>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CardChat",
  props: {
    cardItem: Object,
    exist: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isExistNow: true,
      existChilds: this.exist,
      card: {
        type: "",
        content: "",
        sourceId: "",
      },
    };
  },
  created() {
    console.log(this.cardItem);
    this.card = this.getCardBySourceId(this.cardItem._id);
    if (!this.card) {
      this.existChilds = true;
    }
  },
  methods: {
    deleteCard() {
      this.existChilds = false;
    },
  },
  computed: {
    ...mapGetters(["getCards", "getCardBySourceId"]),
  },
};
</script>

<style>
.card__container {
  border: 1px solid black;
}
.card__title {
  font-size: 1rem;
}
.card__message {
  font-size: 0.8rem;
}
</style>
