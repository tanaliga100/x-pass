import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../config/firebase.config";

export const useUpdateProfile = () => {
  const updateProfile = async (documentId, profileData) => {
    const userDocRef = doc(db, `users/${documentId}`);
    console.log("isExisting ?", Boolean(userDocRef));
    // console.log("USER DOC REF", documentId);
    // console.log("profData", profileData);

    try {
      await updateDoc(
        userDocRef,
        {
          address: profileData.address,
          occupation: profileData.occupation,
          displayName: profileData.displayName,
          userName: profileData.userName,
          gender: profileData.gender,
          photoUrl: profileData.profilePic.name,
        },
        { merge: true }
      );
      toast.succes("Profile Updated");
    } catch (error) {
      console.error("Error Updating the Profile", error);
    }
  };

  return { updateProfile };
};
