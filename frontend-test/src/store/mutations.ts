export const setCard: any = (state: any, cardDetail: any) => {
  const { content, id } = cardDetail;

  const index = state.cards.findIndex((card: any) => card._id == id);
  state.cards[index].drawer.question.content = content;
};
