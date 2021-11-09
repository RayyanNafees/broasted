export default (name, initialState={}) =>
  (state = initialState, action) => {
    switch (action.type) {
      case name:
        return action.payload;
      default:
        return state;
    }
  };
