import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { auth, db } from "../config/firebase.config";
import { currentUser, provideMessage, userDocId } from "../features/authSlice";
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

      //  // find the document id based on the user's email
      const userCollection = collection(db, "users");
      const queryDoc = query(userCollection, where("email", "==", email));

      const querySnap = await getDocs(queryDoc);

      if (!querySnap.empty) {
        const documentId = querySnap.docs[0].id;
        console.log("RETRIEVED USER", querySnap.docs[0].data());
        dispatch(userDocId(documentId));
      }

      const user = userCredential.user;

      console.log("current user dispatch", user);
      dispatch(currentUser({ ...user }));
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
