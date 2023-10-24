import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../store/features/uiSlice";
import RightNav from "../shared/RightNav";
import { default as LeftNav } from "./LeftNav";
import Logo from "./Logo";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center  ">
      <div className="basis-1/4 justify-center">
        <Logo />
      </div>
      <div className="basis-3/4">
        <div className="flex flex-row items-center  ">
          {/* LEFT */}
          <section className={`${!isAuth ? "basis-1/4" : " w-full "} `}>
            {isAuth && <LeftNav />}
          </section>
          {/* RIGHT */}
          <section className={`${!isAuth ? "basis-3/4" : " w-full "}`}>
            {!isAuth ? (
              <section className="flex flex-row justify-end pr-10">
                <Link
                  to="auth"
                  onClick={() => {
                    dispatch(openModal());
                  }}
                >
                  <h1 className="font-bold text-base  border-2   rounded-md border-emerald-500 hover:bg-emerald-800 hover:text-white hover:border-collapse text-emerald-500 ">
                    Register / Login
                  </h1>
                </Link>
              </section>
            ) : (
              <section className="">
                <RightNav />
              </section>
            )}
          </section>
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
