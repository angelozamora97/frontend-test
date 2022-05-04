export const editCard: any = async ({ commit }: any, cardDetail: any) => {
  commit("setCard", cardDetail);
};
