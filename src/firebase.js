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

const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore();
export default firebaseApp;
