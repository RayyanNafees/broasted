import { doc, getDoc } from "firebase/firestore";
import fstore from "../firebase";

export const hotel_data = (dispatch) =>
  getDoc(doc(fstore, "settings", "hotel"))
    .then((snap) => snap.data())
    .then((payload) => dispatch({ type: "GET_HOTEL_SETTINGS", payload }))
    .catch(alert);
