import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../config/firebase.config";
import { setCurrentUser } from "../store/features/authSlice";
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
      // console.log("CREDS", userCredential.user);

      dispatch(
        setCurrentUser({
          email: userCredential.user.email,
        })
      );

      const atIndex = userCredential.user.email.indexOf("@");
      const userName = userCredential.user.email.slice(0, atIndex);
      navigate("/");
      dispatch(closeModal());
      toast.success(`Welcome back,  ${userName.toUpperCase(0)}`);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        //    dispatch(provideMessage("Email doesn't exist. Please register"));
        toast.error("Email doesn't exist. Please register");
      } else {
        //    dispatch(provideMessage("Wrong email or password"));
        toast.error("Wrong email or password");
      }
    }
  };
  return { loginUser };
};

//  const { displayName, photoURL, email, emailVerified } =
//    userCredential.user;
//  const { createdAt, creationTime, lastLoginAt, lastSignInTime } =
//    userCredential.user.metadata;
//  dispatch(
//    setCurrentUser({
//      displayName,
//      emailVerified,
//      email,
//      photoURL,
//      createdAt,
//      creationTime,
//      lastLoginAt,
//      lastSignInTime,
//    })
//  );

//  const user = userCredential.user;
//  console.log("current user", user);
//  dispatch(currentUser({ ...user }));
//  dispatch(setCurrentUser({ ...user }));
