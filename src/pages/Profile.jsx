import React, { useState } from "react";
import { BiSolidMessageEdit } from "react-icons/bi";
import styled from "styled-components";
import initialPhoto from "../assets/profile.svg";
import Header from "../components/shared/Header";
import { useTheme } from "../context/themeContext";
const Profile = () => {
  React.useEffect(() => {}, []);
  const [photo, setPhoto] = useState(null);
  const [profileData, setProfileData] = useState({
    uid: "",
    photo: null,
    address: "",
    occupation: "",
    gender: "",
    displayName: "",
    email: "",
  });

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    // console.log("selected Photo", selectedPhoto);
    setPhoto(selectedPhoto);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value:`, value);
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
      photo: photo,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("EDIT PROFILE FORM DATA", profileData);
    // Handle form submission or API call here
    //     await updateProfile(documentId, profileData);
    //     setProfileData((prev) => prev === "");
    //     setPhoto("");
  };
  const { theme } = useTheme();
  return (
    <div
      className={`${theme === "light" ? "text-slate-900" : "text-emerald-200"}
        shadow-sm  w-[62%] m-auto  min-h-full bg - transparent py-7`}
    >
      <header className="flex">
        <BiSolidMessageEdit size={30} className="m-1" />
        <Header
          title="Edit Profile"
          subtitle="you can add a photo and extra details"
          className={`${
            theme === "light" ? "text-e,emerald-950" : "text-emerald-800"
          } `}
        />
      </header>
      <div className="p-3  w-[100%] text-xs ">
        {/* Added container */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="w-20 h-20  rounded-full mb-6 margin-auto border-emerald-800 overflow-hidden">
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={initialPhoto}
                  alt="initPhoto"
                  className="w-full h-ful"
                />
              )}
            </div>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-2  w-full border rounded-sm focus:ring focus:ring-blue-200 "
            />
          </div>
          <First>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold ">
                Display Name
              </label>
              <input
                type="text"
                placeholder="Juan"
                id="displayName"
                name="displayName"
                value={profileData.displayName || ""}
                onChange={handleInputChange}
                className="mt-1 p-1  w-full border rounded-sm focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-semibold  "
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="juandelacruz"
                id="userName"
                name="userName"
                value={profileData.userName || ""}
                onChange={handleInputChange}
                className="mt-1 p-1  w-full border rounded-sm focus:ring focus:ring-blue-200"
              />
            </div>
          </First>
          <Second theme={theme}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold  ">
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
              <label
                htmlFor="address"
                className="block text-sm font-semibold  "
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
                className="mt-1 p-1  w-full border rounded-sm focus:ring  focus:ring-blue-200"
              />
            </div>
          </Second>
          <Second theme={theme}>
            <div className="mb-4">
              <label className="block text-sm font-semibold ">Gender</label>
              <div className="mt-1 py-3 space-x-4">
                <label className="inline-flex text-sm font-semibold gap-1 items-center">
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
                <label className="inline-flex text-sm font-semibold gap-1 items-center">
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

  input {
    color: black;
  }
`;
const Second = styled.div`
  display: grid;
  text-align: left;
  gap: 1rem;
  grid-template-columns: 30% 50%;
  /* color: ${({ theme }) => (theme === "light" ? "#263b45" : "#7fa396")}; */
  input {
    color: black;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;
