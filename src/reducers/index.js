import { combineReducers, createStore } from "redux";
import menu from "./menu";

const rootReducer = combineReducers({
  menu,
});

const store = createStore(rootReducer);

export default store;
