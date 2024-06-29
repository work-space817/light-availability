import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBubwISe4cKfuILE_oYBgsv9bekXj_uMtg",
  authDomain: "diplomasafe-991ac.firebaseapp.com",
  projectId: "diplomasafe-991ac",
  storageBucket: "diplomasafe-991ac.appspot.com",
  messagingSenderId: "447936407425",
  appId: "1:447936407425:web:5ef8f345d791863435aa80",
  measurementId: "G-PYYLF2QKK2",
};
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
