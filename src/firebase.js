import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTiCVncOsqWP4MFbN8vyjo2FyoC_Dtg-U",
  authDomain: "nanny-app-bdaad.firebaseapp.com",
  projectId: "nanny-app-bdaad",

  storageBucket: "nanny-app-bdaad.appspot.com",
  messagingSenderId: "737890253601",
  appId: "1:737890253601:web:cf6cfb25e6de3cfe9a9c60",
  measurementId: "G-HKCC3VL9LF",
  databaseURL:
    "https://nanny-app-bdaad-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getDatabase(app);

export const dbFirestore = getFirestore(app);
