import { MdOutlineLightMode } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.svg";
const RightNav = () => {
  const location = useLocation();
  const inUsersProfile = location.pathname.startsWith("/profile");

  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();
  const { logoutUserHandler } = useLogout();

  const handleLogout = async () => {
    await logoutUserHandler();
    navigate("/");
  };

  return (
    <>
      <main className="flex flex-row flex-grow  items-center w-full gap-x-12 justify-end">
        <MdOutlineLightMode size={20} onClick={() => toggleTheme()} />
        {!inUsersProfile ? (
          <Link
            to="profile"
            className="items-center justify-center   rounded-full my-auto p-1"
          >
            <FaUserEdit size={25} className="pt-1" />
          </Link>
        ) : (
          <Link
            to="/"
            className="items-center justify-center   rounded-full my-auto p-1"
          >
            <VscFeedback size={25} className="pt-1" />
          </Link>
        )}
        <Link to="timeline" onClick={() => {}}>
          {/* <h1 className="font-bold text-base p-2  border-2 rounded-md border-emerald-500 text-emerald-500"></h1> */}
          <img
            width={30}
            height={30}
            src={profile}
            alt="profile-settings"
            className="rounded  "
          />
        </Link>
        <button onClick={handleLogout}>
          <h1
            className={`${
              theme === "light"
                ? "bg-emerald-900 text-white"
                : "bg-emerald-300 text-slate-900"
            } hover:bg-emerald-950 font-bold text-base bg-emerald-500 text-white rounded-md border-emerald-950 p-3 `}
          >
            Logout
          </h1>
        </button>
      </main>
    </>
  );
};

export default RightNav;

import { useLogout } from "../../hooks/useLogout";

// const Rightlinks = [
//   { id: 1, text: "Dashboard", path: "/", icon: <TbBrandFeedly /> },
//   { id: 2, text: "Prescription", path: "add", icon: <BiMessageSquareAdd /> },
//   { id: 3, text: "Treatment", path: "users", icon: <FiUsers /> },
// ];

// import { BiMessageSquareAdd } from "react-icons/bi";
// import { FiUsers } from "react-icons/fi";
// import { TbBrandFeedly } from "react-icons/tb";
// import styled from "styled-components";
// import { useTheme } from "../../context/themeContext";

// const RightPanel = styled.div`
//   display: flex;
//   margin: 0 auto;
//   align-items: center;
//   justify-content: space-around;
//   min-width: 2rem;
//   gap: 1rem;
//   flex-direction: row;
// `;

import { FaUserEdit } from "react-icons/fa";
import { useTheme } from "../../context/themeContext";
