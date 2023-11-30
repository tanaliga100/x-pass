import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "../config/firebase.config";
import {
  setCurrentUser,
  setIsAuthenticated,
} from "../store/features/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("USE AUTH", user);
        dispatch(setIsAuthenticated(true));
        // SANITIZE OBJECTS...
        const { lastSignInTime, creationTime } = user.metadata;
        const { displayName, email, emailVerified, photoURL, phoneNumber } =
          user;
        dispatch(
          setCurrentUser({
            email,
            emailVerified,
            phoneNumber,
            photoURL,
            displayName,
            lastSignInTime,
            creationTime,
          })
        );
      } else {
        toast.info("Please Login or Create an Account", {
          position: "top-center",
          autoClose: 500,
          theme: "light",
          type: "default",
        });

        //  dispatch(setCurrentUser(null));
        // Clear user data if not authenticated
        //    dispatch(setIsAuthenticated(false));
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  });
};
