<template>
  <div class="home">
    <CardChat id="62716b8df2074972be9ba190" />
  </div>
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
    // this.card = this.getCardFirstCard();
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
    // ...mapGetters(["getCardFirstCard"]),
  },
};
</script>
