import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/shared/Header";
import { useUpdateProfile } from "../utils/updateProfile";

const Profile = () => {
  const { updateProfile } = useUpdateProfile();
  // retrieved the currentUser
  const currentUser = useSelector((state) => state.auth.currentUser);
  //   const userId = useSelector((state) => state.user.users);
  const documentId = useSelector((state) => state.auth.currentUserDocId);

  React.useEffect(() => {
    console.log("DOC_ID", documentId);
  }, []);
  const [profileData, setProfileData] = useState({
    uid: currentUser.uid,
    profilePic: null,
    address: currentUser.address,
    occupation: currentUser.occupation,
    userName: currentUser.userName,
    gender: currentUser.gender,
    label: currentUser.label,
    displayName: currentUser.displayName,
  });
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };
  // HOOKS

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
      profilePic: photo,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission or API call here
    await updateProfile(documentId, profileData);
    //     setProfileData((prev) => prev === "");
    //     setPhoto("");
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full overflow-y-auto  min-h-full  ">
      <Header title="Edit Profile" />
      <div className="p-10 ">
        {/* Added container */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Photo
            </label>
            <div className="w-20 h-20 rounded-full border border-gray-300 overflow-hidden">
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200"></div>
              )}
            </div>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-2 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Display Name
            </label>
            <input
              type="text"
              placeholder="Juan Dela Cruz"
              id="name"
              name="displayName"
              value={profileData.displayName || ""}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="@juandelacruz"
              id="username"
              name="userName"
              value={profileData.userName || ""}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <div className="mt-1 space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={profileData.gender === "Male"}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 h-4 w-4"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={profileData.gender === "Female"}
                  onChange={handleInputChange}
                  className="form-radio text-blue-500 h-4 w-4"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              placeholder="Manila, Philippines"
              id="address"
              name="address"
              value={profileData.address || ""}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="occupation"
              className="block text-sm font-medium text-gray-700"
            >
              Occupation
            </label>
            <input
              type="text"
              placeholder="Developer"
              id="occupation"
              name="occupation"
              value={profileData.occupation || ""}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="juandelacruz@mail.com"
              id="email"
              name="email"
              value={profileData.email || ""}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

//   const [name, setName] = useState("John Doe");
//   const [username, setUsername] = useState("johndoe");
//   const [email, setEmail] = useState("john@example.com");
//   const [gender, setGender] = useState("");
//   const [address, setAddress] = useState("Manila, Philippines");
//   const [occupation, setOccupation] = useState("Dev");
//   const [photo, setPhoto] = useState(null);
