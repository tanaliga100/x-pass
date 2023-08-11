import { useSelector } from "react-redux";
import img from "../../assets/profile.svg";
/* eslint-disable react/prop-types */

const Sidebar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { email, uid } = useSelector((state) => state.auth.currentUser);

  return (
    <div className="text-center justify-center  py-10 rounded-sm overflow-y-scroll bg-white ">
      {/* Sidebar RENDERING  */}
      {isAuthenticated && (
        <div className="justify-center flex flex-col gap-3 place-items-center align-middle pt-3 ">
          <img src={img} alt="dp" width={75} height={100} />
          <span className=" text-md font-bold  bg-emerald-500 text-white px-3 p-1 rounded-lg">
            {/* {userName.charAt(0).toUpperCase() + userName.slice(1)} */}
            {email}
          </span>
          <p className="text-lg text-emerald-950">
            <span className="text-sm px-5 font-normal border-2  bg-white text-emerald-500 p-1 rounded-md">
              {uid}
            </span>
          </p>{" "}
          {/* CONDITIONS AND CONDITIONS */}
        </div>
      )}
    </div>
  );
};
export default Sidebar;
