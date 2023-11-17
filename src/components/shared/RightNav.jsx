import { MdOutlineLightMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import profile from "../../assets/profile.svg";
const RightNav = () => {
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
        <Link
          to="profile"
          className="items-center justify-center bg-white  rounded-full my-auto p-1"
        >
          {<AiOutlineSetting size={20} className="" />}
        </Link>
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

import { AiOutlineSetting } from "react-icons/ai";
import { useLogout } from "../../hooks/useLogout";

const Rightlinks = [
  { id: 1, text: "Dashboard", path: "/", icon: <TbBrandFeedly /> },
  { id: 2, text: "Prescription", path: "add", icon: <BiMessageSquareAdd /> },
  { id: 3, text: "Treatment", path: "users", icon: <FiUsers /> },
];

import { BiMessageSquareAdd } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { TbBrandFeedly } from "react-icons/tb";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

const RightPanel = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  min-width: 2rem;
  gap: 1rem;
  flex-direction: row;
`;
