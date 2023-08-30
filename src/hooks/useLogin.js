import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase.config";
import { currentUser, provideMessage } from "../features/authSlice";
import { closeModal } from "../features/uiSlice";

export const useLogin = () => {
  const dispatch = useDispatch();

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(currentUser(user));
      dispatch(closeModal());
      dispatch(provideMessage("Successfully Login"));
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
