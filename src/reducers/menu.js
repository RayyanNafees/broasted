const menu = (state = { items: [], combos: [] }, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, items: action.payload };
    case "GET_COMBOS":
      return { ...state, combos: action.payload };
    default:
      return state;
  }
};

export default menu;
