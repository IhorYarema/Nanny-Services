// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTiCVncOsqWP4MFbN8vyjo2FyoC_Dtg-U",
  authDomain: "nanny-app-bdaad.firebaseapp.com",
  projectId: "nanny-app-bdaad",
  // storageBucket: "nanny-app-bdaad.firebasestorage.app",
  storageBucket: "nanny-app-bdaad.appspot.com",
  messagingSenderId: "737890253601",
  appId: "1:737890253601:web:cf6cfb25e6de3cfe9a9c60",
  measurementId: "G-HKCC3VL9LF",
  databaseURL:
    "https://nanny-app-bdaad-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔑 Авторизація
export const auth = getAuth(app);

// 📦 Realtime Database
export const db = getDatabase(app);
// 🔹 Для Firestore (users, favorites)
export const dbFirestore = getFirestore(app);
