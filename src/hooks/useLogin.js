import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { auth, db } from "../config/firebase.config";
import { provideMessage, setCurrentUser } from "../store/features/authSlice";
import { closeModal } from "../store/features/uiSlice";

export const useLogin = () => {
  const dispatch = useDispatch();

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //  // find the document id based on the user's email
      const userCollection = collection(db, "users");
      const queryDoc = query(userCollection, where("email", "==", email));

      await getDocs(queryDoc);

      const user = userCredential.user;

      //  dispatch(currentUser({ ...user }));
      dispatch(setCurrentUser(user));
      dispatch(closeModal());
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        dispatch(provideMessage("Email doesn't exist. Please register"));
      } else {
        dispatch(provideMessage("Wrong email or password"));
      }
    }
  };
  return { loginUser };
};
