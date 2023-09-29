import { Link, useNavigate } from "react-router-dom";

import profile from "../../assets/profile.svg";
const RightNav = () => {
  const navigate = useNavigate();
  const { logoutUserHandler } = useLogout();

  const handleLogout = async () => {
    await logoutUserHandler();
    navigate("/");
  };

  return (
    <>
      <main className="flex flex-row   items-center justify-around">
        {" "}
        <Link
          to="profile"
          className="items-center justify-center bg-white p-3 rouendd-full center place-items-center "
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
            className="rounded"
          />
        </Link>
        <button onClick={handleLogout}>
          <h1 className="hover:bg-emerald-950 font-bold text-base p-2 bg-emerald-500 text-white rounded-md border-emerald-950">
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
