import {} from "firebase/firestore";
import fstore from "../firebase";

export const get_items = (dispatch) =>
  getDocs(collection(fstore, "items"))
    .then((snap) => snap.docs.map((doc) => doc.data()))
    .then((payload) => dispatch({ type: "GET_ITEMS", payload }))
    .catch(alert);

export const get_combos = (dispatch) =>
  getDocs(collection(fstore, "combos"))
    .then((snap) => snap.docs.map((doc) => doc.data()))
    .then((payload) => dispatch({ type: "GET_COMBOS", payload }))
    .catch(alert);
