import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { openModal } from "../../store/features/uiSlice";
import LeftNav from "../shared/LeftNav";
import RightNav from "../shared/RightNav";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center p-3 bg-slate-100  ">
      <div className="basis-1/5 ">
        <Logo />
      </div>
      <div className="basis-full justify-between ">
        <div className="flex flex-row items-center  ">
          {/* LEFT */}
          <section className={`${!isAuth ? "" : " w-full"} flex flex-row `}>
            {isAuth && (
              <>
                <Search placeholder={"Search a document..."} />
                <LeftNav />
              </>
            )}
          </section>
          {/* RIGHT */}
          <section className={`${!isAuth ? "" : " w-full "} `}>
            {!isAuth ? (
              <section className="w-full flex h-auto flex-row basis-full items-center">
                <Link
                  to="auth"
                  onClick={() => {
                    dispatch(openModal());
                  }}
                >
                  <h1 className=" bg-emerald-400 p-3 font-bold text-white rounded-md hover:bg-emerald-800 transition-all">
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

const LeftPanel = styled.div`
  display: flex;
  min-width: 2rem;
  gap: 1rem;
  justify-content: space-between;
  flex-direction: row;

  a {
    padding: 0.5rem;
  }
`;
