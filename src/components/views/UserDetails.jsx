import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase.config";
import { LoadingWrapper } from "../../layout/LoadingLayout";

const UserDetails = () => {
  const params = useParams();
  const [userData, setUserData] = useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "users"),
          where("id", "==", params.id.toString())
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const user = querySnapshot.docs[0].data();
          setUserData(user);
        } else {
          console.log("No user found with this ID");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
    return () => fetchData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Details</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add more user details here */}
        </div>
      ) : (
        <LoadingWrapper />
      )}
    </div>
  );
};
export default UserDetails;
