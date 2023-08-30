import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";

export const updateUserProfile = async (uid, profileData) => {
  const userDocRef = doc(db, "users", uid);
  console.log("USER DOC REF", userDocRef);
  //   console.log("profData", profileData);
  try {
    await updateDoc(userDocRef, {
      profilePic: profileData.profilePic,
      address: profileData.address,
      occupation: profileData.occupation,
      fullName: profileData.fullName,
      userName: profileData.userName,
      gender: profileData.gender,
    });
    console.log("Profile Updated");
  } catch (error) {
    console.error("Error Updating the Profile", error);
  }
};
