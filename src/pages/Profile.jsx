import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";

const Profile = () => {
  //   const { updateProfile } = useUpdateProfile();
  // retrieved the currentUser
  //   const currentUser = useSelector((state) => state.auth.currentUser);
  //   const userId = useSelector((state) => state.user.users);
  //   const documentId = useSelector((state) => state.auth.currentUserDocId);

  React.useEffect(() => {}, []);
  const [profileData, setProfileData] = useState({
    uid: "test123",
    profilePic: "",
    address: "Makati City, Philippines",
    occupation: "RMT",
    userName: "Xpass ",
    gender: "Female",
    label: "",
    displayName: "xpass100",
    email: "xpass@mail.com",
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
    //     await updateProfile(documentId, profileData);
    //     setProfileData((prev) => prev === "");
    //     setPhoto("");
  };

  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "light" ? "red " : "blue"
      }  shadow-md w-[100%]  min-h-full bg-transparent `}
    >
      <div className="p-3  w-[100%] text-xs ">
        {/* Added container */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="w-20 h-20  rounded-smll margin-auto border-2 overflow-hidden">
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-ful"></div>
              )}
            </div>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-2  w-full border rounded-sm focus:ring focus:ring-blue-200"
            />
          </div>
          <First>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium ">
                Display Name | Nickname
              </label>
              <input
                type="text"
                placeholder="Juan Dela Cruz"
                id="name"
                name="displayName"
                value={profileData.displayName || ""}
                onChange={handleInputChange}
                className="mt-1 p-1  w-full border rounded-sm focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium ">
                Full Name
              </label>
              <input
                type="text"
                placeholder="@juandelacruz"
                id="username"
                name="userName"
                value={profileData.userName || ""}
                onChange={handleInputChange}
                className="mt-1 p-1  w-full border rounded-sm focus:ring focus:ring-blue-200"
              />
            </div>
          </First>
          <Second theme={theme}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium ">
                Email
              </label>
              <input
                type="email"
                placeholder="juandelacruz@mail.com"
                id="email"
                name="email"
                value={profileData.email || ""}
                onChange={handleInputChange}
                className="mt-1 p-1  w-full border rounded-smfocus:ring focus:ring-blue-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium ">
                Address
              </label>
              <input
                type="text"
                placeholder="Manila, Philippines"
                id="address"
                name="address"
                value={profileData.address || ""}
                onChange={handleInputChange}
                className="mt-1 p-1  w-full border rounded-sm focus:ring  focus:ring-blue-200"
              />
            </div>
          </Second>
          <Second theme={theme}>
            <div className="mb-4">
              <label className="block text-sm font-medium ">Gender</label>
              <div className="mt-1 py-3 space-x-4">
                <label className="inline-flex ">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={profileData.gender === "Male"}
                    onChange={handleInputChange}
                    className="form-radio text-blue-500 h-4 w-4"
                  />
                  <span className="m">Male</span>
                </label>
                <label className="inline-flex ">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={profileData.gender === "Female"}
                    onChange={handleInputChange}
                    className="form-radio text-blue-500 h-4 w-4"
                  />
                  <span className="m">Female</span>
                </label>
              </div>
            </div>
          </Second>
          <Actions>
            <button
              type="submit"
              className="bg-emerald-900 hover:bg-emerald-500 text-white px-4 p rounded-sm focus:outline-none focus:ring focus:ring-blue-200"
            >
              Clear
            </button>
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-900 text-white px-4 py-2 rounded-sm focus:outline-none focus:ring focus:ring-blue-200"
            >
              Save Changes
            </button>
          </Actions>
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

const First = styled.div`
  display: grid;
  text-align: left;
  gap: 1rem;
  grid-template-columns: 40% 40%;
  width: 80%;
`;
const Second = styled.div`
  display: grid;
  text-align: left;
  gap: 1rem;
  grid-template-columns: 30% 50%;
  color: ${({ theme }) => (theme === "light" ? "#263b45" : "#7fa396")};
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;
