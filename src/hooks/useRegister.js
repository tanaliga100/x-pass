import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { auth, db } from "../config/firebase.config";
import { currentUser, provideMessage } from "../features/authSlice";
import { closeModal } from "../features/uiSlice";
import { checkEmail } from "../utils/checkEmail";

export const useRegister = () => {
  const dispatch = useDispatch();

  const createUser = async (email, password) => {
    try {
      // check email if it exists
      const emailTaken = await checkEmail(email);
      if (!emailTaken) {
        const newUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        //   DISPATCH THE CURRENT USER
        dispatch(currentUser(newUser.user));
        dispatch(closeModal());

        // ADD THE USER TO THE COLLECTION
        const userCollection = collection(db, "users");
        await addDoc(userCollection, {
          uid: newUser.user.uid,
          email: newUser.user.email,
        });
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        dispatch(provideMessage("Email already exists"));
      } else {
        dispatch(provideMessage("Wrong email or password"));
      }
    }
  };

  return { createUser };
};
