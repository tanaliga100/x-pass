// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../config/firebase.config";
// import { currentUser, provideMessage } from "../features/authSlice";

// export const loginAccount = async (email, password, fn) => {
//   try {
//     const userCredentials = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     fn(currentUser(userCredentials.user));
//     fn(provideMessage("Successfully Login "));
//   } catch (error) {
//     if (error.code === "auth/user-not-found") {
//       fn(provideMessage("Email doesn't exist. Please register"));
//     } else {
//       fn(provideMessage("Wrong email or password"));
//     }
//   }
// };

// export const registerAccount = async (email, password, fn) => {
//   try {
//     const userCredentials = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );

//     fn(currentUser(userCredentials.user));
//     fn(provideMessage("User Registered"));
//   } catch (error) {
//     console.log("ERROR FOR REGISG", error);
//     if (error.code === "auth/email-already-in-use") {
//       fn(provideMessage("Email already exists"));
//     } else {
//       fn(provideMessage("Wrong email or password"));
//     }
//   }
// };

// // export const monitorAuthState = async () => {
// //      onAuthStateChanged(auth, user => {

// //      })
// // }
