import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase.config";

export const checkEmail = async (email) => {
  const q = query(
    collection(db, "users"),
    where("email", "==", email?.toLowerCase())
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.length > 0;
};
