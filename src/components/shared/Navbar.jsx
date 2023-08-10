import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/profile.svg";
import { demoAccount, logoutUser } from "../../state/authSlice";
import { openModal } from "../../state/uiSlice";
import Hero from "../shared/Hero";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();

  const handleDemoAccount = () => {
    dispatch(demoAccount());
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div
      className=" text-emerald-500  py-4 flex flex-row place-items-center 
shadow-lg shadow-emerald-500/5"
    >
      {/* LEFT SECTION */}
      <div className="basis-1/4 ">
        <Link>
          <h1 className="font-bold text-3xl text-center uppercase ">
            Quoty
            <span className="text-emerald-900">vate</span>
          </h1>
        </Link>
      </div>
      {/* RIGHT SECTION */}
      <div className="basis-full">
        <div className="flex flex-row justify-between place-items-center">
          {/* LEFT */}
          <Hero />
          {/* <section className="w-screen  text-emerald-600 py-3">
            {location.pathname !== "/timeline" && <Hero />}
          </section> */}
          {/* RIGHT */}
          {isAuth ? (
            <main className="flex flex-row gap-5 pr-10">
              <Link to="profile" onClick={() => {}}>
                {/* <h1 className="font-bold text-base p-2  border-2 rounded-md border-emerald-500 text-emerald-500"></h1> */}
                <img
                  width={50}
                  height={50}
                  src={profile}
                  alt="profile-settings"
                  className="rounded"
                />
              </Link>
              <button onClick={handleLogout}>
                <h1 className="font-bold text-base p-2  border-2 rounded-md border-emerald-500 text-emerald-500">
                  Logout
                </h1>
              </button>
            </main>
          ) : (
            <section className="flex flex-row gap-5 items-center  pr-10">
              <Link to="auth" onClick={() => dispatch(openModal())}>
                <h1 className="font-bold text-base p-2  border-2 rounded-md border-emerald-500 text-emerald-500">
                  Create an Account
                </h1>
              </Link>
              <button
                className="rounded-lg text-emerald-500 font-bold border-2 border-emerald-500  px-6 p-2 m-5 "
                onClick={handleDemoAccount}
              >
                Demo Account
              </button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;

// const links = [
//   { id: 1, text: "Feed", path: "/", icon: <TbBrandFeedly /> },
//   { id: 2, text: "Add", path: "add", icon: <BiMessageSquareAdd /> },
//   { id: 3, text: "Followers", path: "followers", icon: <FiUsers /> },
// ];

/* <h1 className="font-bold text-xl rounded-md  text-emerald-500">
              Notifications
            </h1>
            <h1 className="font-bold text-xl rounded-md  text-emerald-500">
              Profile
            </h1> */

//   {
//     isAuth ? (
//       <section className="flex flex-row gap-14">
//         {links.map((link) => (
//           <NavLink
//             end
//             to={link.path}
//             key={link.id}
//             className="font-bold text-xl rounded-md  text-emerald-500 flex flex-row gap-2"
//           >
//             {/* <img src={link.icon} className="border-none text-emerald-500" /> */}
//             <h1>{link.text}</h1>
//           </NavLink>
//         ))}
//       </section>
//     ) : (
//       <section className="flex flex-row gap-14 ">
//         <Link className="font-bold text-xl rounded-md  text-emerald-500 flex flex-row gap-2">
//           NewsFeed
//         </Link>
//       </section>
//     );
//   }
