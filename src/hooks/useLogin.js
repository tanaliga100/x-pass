import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase.config";
import { provideMessage, setCurrentUser } from "../store/features/authSlice";
import { closeModal } from "../store/features/uiSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      console.log("user credentials", userCredential.user);
      const { displayName, photoURL, email, emailVerified } =
        userCredential.user;
      const { createdAt, creationTime, lastLoginAt, lastSignInTime } =
        userCredential.user.metadata;
      dispatch(
        setCurrentUser({
          displayName,
          emailVerified,
          email,
          photoURL,
          createdAt,
          creationTime,
          lastLoginAt,
          lastSignInTime,
        })
      );

      //  const user = userCredential.user;
      //  console.log("current user", user);
      //  dispatch(currentUser({ ...user }));
      //  dispatch(setCurrentUser({ ...user }));
      navigate("/");
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
