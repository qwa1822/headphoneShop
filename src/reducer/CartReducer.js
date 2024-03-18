export const reducers = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cardList: payload.card,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cardList: payload.remove,
      };
    case "UPDATE_TOTAL":
      return {
        ...state,
        total: payload.total,
      };
    default:
      throw new Error("Not Invalid occured ");
  }
};
