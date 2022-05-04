<template>
  <v-row class="home mx-0">
    <v-col cols="12" md="8" lg="6" class="mx-auto">
      <CardChat :cardItem="card" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeView",
  components: {
    CardChat: () => import("@/components/CardChat.vue"),
  },
  data() {
    return {
      card: null,
    };
  },
  async created() {
    this.card = this.getCardFirstCard;
  },
  methods: {
    async getChats() {
      try {
        const { cards } = this.res;
        console.log(cards);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapGetters(["getCardFirstCard"]),
  },
};
</script>
