import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { auth, db } from "../config/firebase.config";
import { provideMessage, setCurrentUser } from "../store/features/authSlice";
import { closeModal } from "../store/features/uiSlice";
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
        // ADD TO THE USERS COLLECTION
        const userCollection = collection(db, "users");
        const userDoCRef = await addDoc(userCollection, {
          email: newUser.user.email,
          fielID: newUser.user.uid,
        });

        //   DISPATCH THE CURRENT USER
        //    dispatch(currentUser(newUser.user));
        dispatch(
          setCurrentUser({
            email: newUser.user.email,
            userId: userDoCRef.id,
            messag: "User Registered",
          })
        );
        dispatch(closeModal());
        // attached the documentId retrieved from firebase

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
