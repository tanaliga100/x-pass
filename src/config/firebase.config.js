// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_sMESS_SENDER,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
//

// AUTH EMULATOR SUITE
connectAuthEmulator(auth, "http://localhost:9099");
export const signInEmailAndPassowrd = async (authEmail, authPassword) => {
  try {
    const usersCredentials = await signInWithEmailAndPassword(
      auth,
      authEmail,
      authPassword
    );
    console.log("user credentials", usersCredentials);
  } catch (error) {
    console.log("SIGN_IN_ERROR", error);
  }
};

export const signUpEmailAndPassowrd = async (authEmail, authPassword) => {
  console.log("creds", authEmail, authPassword);
  try {
    const usersCredentials = await createUserWithEmailAndPassword(
      auth,
      authEmail,
      authPassword
    );
    console.log("user credentials", usersCredentials.user);
  } catch (error) {
    console.log("SIGNUP_ERROR", error);
  }
};

let label = "";
export const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("REAL TIME AUTH", user.email);
      label = `Hello, ${user.displayName || user.email}`;
    } else {
      label = " You are signed out!";
    }
  });
};
const root = document.getElementById("root");
const header = document.createElement("header");
header.textContent = label;
header.classList.add("prompt");
root.appendChild(header);

const all = document.querySelectorAll("*");
console.log("dom", all[13]);
