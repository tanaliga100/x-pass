import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { auth, db } from "../config/firebase.config";
import { currentUser, provideMessage, userDocId } from "../features/authSlice";
import { closeModal } from "../features/uiSlice";
import { emailExists } from "../utils/checkEmail";

export const useRegister = () => {
  const dispatch = useDispatch();

  const createUser = async (email, password) => {
    try {
      // check email if it exists
      const emailAlreadyExitst = await emailExists(email);
      // if false, then register the user
      console.log("does email exists ?", emailAlreadyExitst);
      if (!emailAlreadyExitst) {
        const newUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const userCollection = collection(db, "users");
        const userDoCRef = await addDoc(userCollection, {
          email: newUser.user.email,
          fielID: newUser.user.uid,
        });

        console.log("NEW USER ", userDoCRef.id);

        //   DISPATCH THE CURRENT USER
        dispatch(currentUser(newUser.user));
        dispatch(closeModal());
        // attached the documentId retrieved from firebase
        dispatch(userDocId(userDoCRef.id));
        dispatch(provideMessage("User Registered"));

        // ADD THE USER TO THE COLLECTION
      } else {
        dispatch(provideMessage("Email already exists. Please login instead"));
      }
    } catch (error) {
      console.log("FOR REGISTER", error.message || error.code);
      if (error.code === "auth/email-already-in-use") {
        dispatch(provideMessage("Email already exists"));
      } else {
        dispatch(provideMessage("Wrong email or password"));
      }
    }
  };

  return { createUser };
};
