import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmcJBRXDtf9PwMgL3UZVAc6GukSZNPqS8",

  authDomain: "broasted.firebaseapp.com",

  databaseURL:
    "https://broasted-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "broasted",

  storageBucket: "broasted.appspot.com",

  messagingSenderId: "915053015034",

  appId: "1:915053015034:web:e0e4f2ccc289a48218be43",

  measurementId: "G-XXC2GXDRYM",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore();
export default firestore;
