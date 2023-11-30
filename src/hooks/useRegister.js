import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../config/firebase.config";
import { setCurrentUser } from "../store/features/authSlice";
import { closeAuthModal } from "../store/features/uiSlice";
import { emailExists } from "../utils/checkEmail";

export const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          userId: newUser.user.uid,
        });

        //   DISPATCH THE CURRENT USER
        // attached the documentId retrieved from firebase
        dispatch(
          setCurrentUser({
            email: newUser.user.email,
            colId: userDoCRef.id,
            message: "User Registered",
          })
        );

        navigate("/");
        dispatch(closeAuthModal());

        const atIndex = newUser.user.email.indexOf("@");
        const userName = newUser.user.email.slice(0, atIndex);
        toast.success(`Welcome ${userName.toUpperCase(0)}`);
        // ADD THE USER TO THE COLLECTION
      } else {
        toast.warning("Email already exists. Please login instead");
      }
    } catch (error) {
      console.log("FOR REGISTER", error.message || error.code);
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already exists");
      } else {
        toast.error("Wrong email or password");
      }
    }
  };

  return { createUser };
};
