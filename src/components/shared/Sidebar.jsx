import {} from "react-icons";
import { BiMessageSquareAdd } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { TbBrandFeedly } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-10 text-left p-3 text-xl font-normal">
      {links.map((link) => {
        return (
          <NavLink
            end
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-emerald-500 flex flex-row gap-3"
                : "flex flex-row gap-3"
            }
          >
            <img src={link.icon} />
            <h1 className="font-bolder">{link.text}</h1>
          </NavLink>
        );
      })}
    </div>
  );
};
export default Sidebar;

const links = [
  { id: 1, text: "Feed", path: "/quotes", icon: <TbBrandFeedly /> },
  { id: 2, text: "Add Quote", path: "/add", icon: <BiMessageSquareAdd /> },
  { id: 3, text: "Users", path: "/users", icon: <FiUsers /> },
];
