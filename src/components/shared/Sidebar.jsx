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
          <span className=" text-md font-bold  bg-emerald-500 text-white px-3 p-1 rounded-lg">
            {/* {userName.charAt(0).toUpperCase() + userName.slice(1)} */}

            {userName || "N/A"}
          </span>
          <section className="bg-black w-full">
            <span className="flex flex-row  items-center align-middle bg-white justify-center">
              <p className="items-center font-mono text-sm font-extrabold align-middle">
                {address || "N/A"}
              </p>
            </span>
            <hr />
            <span className="flex flex-w  items-center align-middle bg-white justify-center">
              <p className="items-center font-mono text-sm font-extrabold align-middle">
                {gender || "N/A"}
              </p>
            </span>
          </section>
          <hr /> {/* Box */}
          <section className="border-gray-500 p-5 rounded-2xl bg-white">
            <span className="flex flex-row  items-center align-middle bg-white justify-center">
              <p className="items-center font-mono text-sm font-extrabold align-middle">
                {fullName || "N/A"}
              </p>
            </span>
            <hr />{" "}
            <span className="flex flex-row  items-center align-middle bg-white justify-center">
              <p className="items-center font-mono text-sm font-extrabold align-middle">
                {occupation || "N/A"}
              </p>
            </span>
            <hr />{" "}
            <span className="flex flex-row  items-center align-middle bg-white justify-center">
              <p className="items-center font-mono text-sm font-extrabold align-middle">
                {email || "N/A"}
              </p>
            </span>
            <hr />
          </section>
          {/* CONDITIONS AND CONDITIONS */}
          <Link
            to="profile"
            className="bg-emerald-600 text-white p-2 border-2 rounded-md hover:bg-emerald-700"
          >
            Edit Profile
          </Link>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
