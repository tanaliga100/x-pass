import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/shared/Header";
import { updateUserProfile } from "../utils/updateProfile";

const Profile = () => {
  //   const [name, setName] = useState("John Doe");
  //   const [username, setUsername] = useState("johndoe");
  //   const [email, setEmail] = useState("john@example.com");
  //   const [gender, setGender] = useState("");
  //   const [address, setAddress] = useState("Manila, Philippines");
  //   const [occupation, setOccupation] = useState("Dev");
  //   const [photo, setPhoto] = useState(null);

  // retrieved the currentUser
  const currentUser = useSelector((state) => state.auth.currentUser);
  //   const [photo, setPhoto] = useState([]);
  const [profileData, setProfileData] = useState({
    uid: currentUser.uid,
    profilePic: null,
    address: currentUser.address,
    occupation: currentUser.occupation,
    fullName: currentUser.fullName,
    userName: currentUser.userName,
    gender: currentUser.gender,
  });

  // HOOKS

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission or API call here
    //     await updateUserProfile(name, username, email, address, occupation, photo);
    await updateUserProfile(profileData.uid, profileData);
    console.log("FORM SUBMISSION", profileData);
  };

  //   const handlePhotoChange = (e) => {
  //     const selectedPhoto = e.target.files[0];
  //     setPhoto(selectedPhoto);
  //   };

  return (
    <div className="bg-white rounded-lg shadow-md w-full overflow-y-auto  min-h-full  ">
      <Header title="Edit Profile" />
      <div className="p-10 ">
        {/* Added container */}
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-4">
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
          </div> */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="fullName"
              value={profileData.fullName}
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
              id="username"
              name="userName"
              value={profileData.userName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="username"
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Occupation
            </label>
            <input
              type="text"
              id="username"
              name="occupation"
              value={profileData.occupation}
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
              id="email"
              name="email"
              value={profileData.email}
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
