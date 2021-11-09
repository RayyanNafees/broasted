import { combineReducers, createStore } from "redux";
import menu from "./menu";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web


const rootReducer = combineReducers({
  menu,
});


// STORE________________________

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const  store = createStore(persistedReducer)

export default store;

export const persistor = persistStore(store);