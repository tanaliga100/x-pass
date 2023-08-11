import { Link, useNavigate } from "react-router-dom";

import { FiSettings } from "react-icons/fi";
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

  return (
    <>
      {isAuth ? (
        <main className="flex flex-row   items-center justify-around">
          <Link
            to="profile"
            className="items-center justify-center place-items-center "
          >
            {<FiSettings size={20} />}
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
            <h1 className="hover:bg-emerald-900 font-bold text-base p-2 bg-emerald-500 text-white rounded-md border-emerald-500">
              Logout
            </h1>
          </button>
        </main>
      ) : (
        <section className="flex flex-row pr-10 ">
          <Link to="auth" onClick={() => dispatch(openModal())}>
            <h1 className="font-bold text-base p-2 border-2  rounded-md border-emerald-500 text-emerald-500">
              Auth
            </h1>
          </Link>
        </section>
      )}
    </>
  );
};
export default RightNav;
