import { useSelector } from "react-redux";
import { default as LeftNav } from "./LeftNav";
import Logo from "./Logo";
import RightNav from "./RightNav";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="flex flex-row items-center  bg-white py-5">
      <div className="basis-1/4 flex justify-center">
        <Logo />
      </div>
      <div className="basis-3/4 ">
        <div className="flex flex-row items-center  ">
          {/* LEFT */}
          <section className="basis-4/5 w-full  ">
            {isAuth && <LeftNav />}
          </section>
          {/* RIGHT */}
          <section className="basis-1/5 w-full ">
            {isAuth && <RightNav />}
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
