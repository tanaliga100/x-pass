import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase.config";
import {
  setCurrentUser,
  setIsAuthenticated,
} from "../store/features/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          dispatch(setCurrentUser(user));
          dispatch(setIsAuthenticated(true));
        }
        return unsubscribe;
      },
      []
    );
  });
};
