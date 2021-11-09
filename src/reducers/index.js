import { combineReducers, createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import menu from "./menu";
import settings from "./settings";

const rootReducer = combineReducers({
  menu,
  settings,
});

// STORE________________________

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export default store;

export const persistor = persistStore(store);
