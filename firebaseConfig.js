import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkE4EsXjotg8RlumV90dRcX22VRJU_0FE",

  authDomain: "react-quotes-2ee2f.firebaseapp.com",

  databaseURL:
    "https://react-quotes-2ee2f-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "react-quotes-2ee2f",

  storageBucket: "react-quotes-2ee2f.appspot.com",

  messagingSenderId: "716110678658",

  appId: "1:716110678658:web:d5009f5c1a8ab5f012829b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
