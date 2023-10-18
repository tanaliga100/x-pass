import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase.config";
import { setIsAuthenticated } from "../store/features/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //    console.log("FROM USE AUTH", user);
        //  const { } = user;
        //    dispatch(setCurrentUser(user));
        dispatch(setIsAuthenticated(true));
      } else {
        console.log("No User");

        //  dispatch(setCurrentUser(null));
        // Clear user data if not authenticated
        //    dispatch(setIsAuthenticated(false));
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);
};
