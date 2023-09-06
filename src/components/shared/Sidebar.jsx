import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../assets/profile.svg";
/* eslint-disable react/prop-types */

const Sidebar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { email, address, gender, occupation, fullName, userName } =
    useSelector((state) => state.auth.currentUser);

  return (
    <div className="text-center justify-center  py-10 rounded-sm overflow-y-scroll bg-white ">
      {/* Sidebar RENDERING  */}
      {isAuthenticated && (
        <div className="justify-center flex flex-col gap-3 place-items-center align-middle pt-3 ">
          <img src={img} alt="dp" width={75} height={100} />
          <span className=" text-md font-normal  bg-emerald-500 text-white px-5 p-1 rounded-md">
            {/* {userName.charAt(0).toUpperCase() + userName.slice(1)} */}
            {userName || "@juandelacruz"}
          </span>
          <section className="bg-black w-3/4">
            <span className="flex flex-row  items-center align-middle bg-white justify-center">
              <p className="pb-3 items-center font-sans text-base  font-extrabold align-middle text-emerald-700 ">
                {fullName || "Juan Dela Cruz"}
              </p>
            </span>
            <span className="flex flex-w  items-center align-middle bg-white justify-center">
              <p className="items-center font-mono text-sm font-extrabold align-middle">
                {gender || "Male"}
              </p>
            </span>
          </section>
          <hr className="h-3" /> {/* Box */}
          <section className="flex flex-col border-gray-500 p-5 gap-4 rounded-2xl bg-white">
            <span className="flex flex-row  items-center align-middle bg-white justify-center">
              <p className="items-center font-mono text-sm font-extrabold align-middle">
                {address || "Manila, Philippines"}
              </p>
            </span>
            <span className="flex flex-row  items-center align-middle bg-white justify-center">
              <p className="items-center font-mono text-sm font-extrabold align-middle  text-white bg-emerald-500 px-3 py-1 rounded-md">
                {occupation || "Dev"}
              </p>
            </span>
            <span className="flex flex-row  items-center align-middle bg-white justify-center">
              <p className="items-center font-mono text-sm font-extrabold align-middle">
                {email || "sample@email.com"}
              </p>
            </span>
          </section>
          {/* CONDITIONS AND CONDITIONS */}
          <Link
            to="profile"
            className=" text-emerald-600 p-2 border-2 border-emerald-500 rounded-md hover:bg-emerald-700 hover:text-white"
          >
            Edit Profile
          </Link>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
