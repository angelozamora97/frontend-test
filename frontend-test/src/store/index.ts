import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        _id: "62716b8df2074972be9ba190",
        type: "tree",
        chatbotId: "62716b87f2074972be9ba18f",
        drawer: {
          question: {
            type: "message",
            content: "Hola! 🙌",
          },
          connection: {
            sourceId: null,
          },
        },
      },
      {
        _id: "62716bbdf2074972be9ba192",
        type: "tree",
        chatbotId: "62716b87f2074972be9ba18f",
        drawer: {
          question: {
            type: "message",
            content: "Encantad@ de conocerte",
          },
          connection: {
            sourceId: "62716b8df2074972be9ba190",
          },
        },
      },
      {
        _id: "62716bebf2074972be9ba194",
        type: "tree",
        chatbotId: "62716b87f2074972be9ba18f",
        drawer: {
          question: {
            type: "message",
            content: "Somos Securitec Perú",
          },
          connection: {
            sourceId: "62716bbdf2074972be9ba192",
          },
        },
      },
      {
        _id: "62716bfff2074972be9ba195",
        type: "tree",
        chatbotId: "62716b87f2074972be9ba18f",
        drawer: {
          question: {
            type: "message",
            content:
              "Si ya has llegado hasta aquí es porque vemos buenas aptitudes en tí",
          },
          connection: {
            sourceId: "62716bebf2074972be9ba194",
          },
        },
      },
      {
        _id: "62716c4ef2074972be9ba196",
        type: "tree",
        chatbotId: "62716b87f2074972be9ba18f",
        drawer: {
          question: {
            type: "message",
            content: "Esperamos que pongas todo tu esfuerzo y empeño",
          },
          connection: {
            sourceId: "62716bfff2074972be9ba195",
          },
        },
      },
      {
        _id: "62716c84f2074972be9ba197",
        type: "tree",
        chatbotId: "62716b87f2074972be9ba18f",
        drawer: {
          question: {
            type: "message",
            content: "Pon a prueba tus habilidades",
          },
          connection: {
            sourceId: "62716c4ef2074972be9ba196",
          },
        },
      },
      {
        _id: "62716c95f2074972be9ba198",
        type: "tree",
        chatbotId: "62716b87f2074972be9ba18f",
        drawer: {
          question: {
            type: "message",
            content: "Y demuestranos de loq ue eres capaz",
          },
          connection: {
            sourceId: "62716c84f2074972be9ba197",
          },
        },
      },
      {
        _id: "62716ca5f2074972be9ba199",
        type: "tree",
        chatbotId: "62716b87f2074972be9ba18f",
        drawer: {
          question: {
            type: "message",
            content: "Te deseamos mucha suerte!! 💪💪💪❤️",
          },
          connection: {
            sourceId: "62716c95f2074972be9ba198",
          },
        },
      },
    ],
  },
  getters: {
    getCardBySourceId: (state) => (id: any) => {
      const card = state.cards.find(
        (card) => card.drawer.connection.sourceId == id
      );
      return card;
    },
    getCardFirstCard: (state) => {
      const card = state.cards.find(
        (card) => card.drawer.connection.sourceId == null
      );
      return card;
    },
  },
  mutations: mutations,
  actions: actions,
  modules: {},
});
