export default (name) =>
  (state = {}, action) => {
    switch (action.type) {
      case name:
        return action.payload;
      default:
        return state;
    }
  };
