import { BiMessageSquareAdd } from "react-icons/bi";
import { TbBrandFeedly } from "react-icons/tb";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="flex">
      <span className="basis-1/4"></span>
      <span
        className="basis-full 
      text-indigo-500
      "
      >
        {isAuth && (
          <section className="flex flex-row gap-10 font-bold">
            {links.map((link) => (
              <NavLink
                end
                to={link.path}
                key={link.id}
                className={({ isActive }) =>
                  isActive
                    ? "items-center shadow-2xl text-white bg-emerald-500 rounded-md px-10  flex flex-row gap-1 "
                    : "items-center text-emerald-500 text-xl px-10 flex flex-row gap-1"
                }
              >
                {/* <img src={link.icon} className="border-none text-emerald-500" /> */}
                <h1>{link.text}</h1>
              </NavLink>
            ))}
          </section>
        )}
      </span>
    </div>
  );
};
export default Hero;

const links = [
  { id: 1, text: "Feed", path: "/", icon: <TbBrandFeedly /> },
  { id: 2, text: "Lyrics", path: "add", icon: <BiMessageSquareAdd /> },
  { id: 3, text: "Quotysers", path: "users", icon: <BiMessageSquareAdd /> },
];
