import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const uploadFile = async (file, userDetail) => {
  const fileRef = ref(storage, userDetail.userId);
  const snapShot = await uploadBytes(fileRef, file);
  return snapShot;
};
