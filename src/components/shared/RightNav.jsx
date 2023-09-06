import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import profile from "../../assets/profile.svg";
import { logoutUser } from "../../features/authSlice";
import { openModal } from "../../features/uiSlice";
const RightNav = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  React.useEffect(() => {}, [isAuth]);

  return (
    <>
      {isAuth ? (
        <main className="flex flex-row   items-center justify-around">
          <Link
            to="profile"
            className="items-center justify-center bg-white p-3 rounded-full center place-items-center "
          >
            {<AiOutlineSetting size={20} />}
          </Link>
          <Link to="timeline" onClick={() => {}}>
            {/* <h1 className="font-bold text-base p-2  border-2 rounded-md border-emerald-500 text-emerald-500"></h1> */}
            <img
              width={40}
              height={30}
              src={profile}
              alt="profile-settings"
              className="rounded "
            />
          </Link>
          <button onClick={handleLogout}>
            <h1 className="hover:bg-emerald-950 font-bold text-base p-2 bg-emerald-500 text-white rounded-md border-emerald-950">
              Logout
            </h1>
          </button>
        </main>
      ) : (
        <section className="flex flex-row pr-10 ">
          <Link
            to="auth"
            onClick={() => {
              dispatch(openModal());
              console.log("opening the modal...");
            }}
          >
            <h1 className="font-bold text-base p-2 border-2  rounded-md border-emerald-500 hover:bg-emerald-800 hover:text-white hover:border-collapse text-emerald-500">
              Register / Login
            </h1>
          </Link>
        </section>
      )}
    </>
  );
};
export default RightNav;

import React from "react";
import { AiOutlineSetting } from "react-icons/ai";

