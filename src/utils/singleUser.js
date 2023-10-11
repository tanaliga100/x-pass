import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";

export const getUserDocById = async (uid) => {
  const usersCollectionRef = collection(db, "users");
  const querySnap = await getDocs(usersCollectionRef.where("uid", "==", uid));
  // conditions
  if (!querySnap.empty) {
    const userDocSnap = querySnap.docs[0];
    const userDocRef = doc(db, "uesrs", userDocSnap.id);
    return userDocRef;
  }
  return null;
};
