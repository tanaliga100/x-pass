import { BiMessageSquareAdd } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { TbBrandFeedly } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <section className="flex flex-row  justify-start  font-bold ">
      {links.map((link) => (
        <NavLink
          end
          to={link.path}
          key={link.id}
          className={({ isActive }) =>
            isActive
              ? "items-center   text-white bg-emerald-500 text-lg rounded-md px-5 flex flex-row  "
              : "items-center    text-emerald-500 text-lg px-5  flex flex-row rounded-md "
          }
        >
          <section className="flex flex-row gap-3 items-center justify-center ">
            <div>{link.icon}</div>
            <h1>{link.text}</h1>
          </section>
        </NavLink>
      ))}
    </section>
  );
};
export default LeftNav;

const links = [
  { id: 1, text: "Schedule", path: "/", icon: <TbBrandFeedly /> },
  { id: 2, text: "Appointment", path: "add", icon: <BiMessageSquareAdd /> },
  { id: 3, text: "Patients", path: "users", icon: <FiUsers /> },
];
