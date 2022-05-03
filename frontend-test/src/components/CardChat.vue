<template>
  <div v-if="!isLoading">
    <div class="card__container">
      <h1 class="card__title">{{ card.drawer.question.type }}</h1>
      <p class="card__message">{{ card.drawer.question.content }}</p>
      <div class="card__button">
        <button @click="isActivated = true" v-if="!isActivated">
          Continuar
        </button>
        <button @click="deleteCard" v-else>Eliminar</button>
      </div>
    </div>
    <div v-if="isActivated">
      <component :is="'CardChat'" id="62716b8df2074972be9ba190"></component>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CardChat",
  props: {
    id: String,
  },
  data() {
    return {
      isActivated: false,
      isLoading: true,
      card: {
        type: "",
        content: "",
        sourceId: "",
      },
    };
  },
  created() {
    this.isLoading = true;
    this.card = this.getCard;
    this.isLoading = false;
  },
  methods: {
    deleteCard() {
      console.log("eliminar card");
    },
  },
  computed: {
    ...mapGetters(["getCards"]),
    getCard() {
      const res = this.getCards;
      console.log(this.id);
      console.log(res);
      const card = res.find((card) => {
        console.log(card);
        console.log(card._id);
        return card._id == this.id;
      });
      console.log(card);
      return card;
    },
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
