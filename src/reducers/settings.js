const settings = (state = { items: [], combos: [] }, action) => {
  switch (action.type) {
    case "GET_HOTEL_SETTINGS":
      return { ...state, hotel: action.payload };
    default:
      return state;
  }
};

export default settings;
