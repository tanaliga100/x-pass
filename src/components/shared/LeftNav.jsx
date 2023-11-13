import { BiMessageSquareAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { openAddPost } from "../../store/features/uiSlice";

const LeftNav = () => {
  const dispatch = useDispatch();

  return (
    <section className="flex flex-row  justify-start  font-bold ">
      {links.map((link) => (
        <NavLink
          end
          to={link.path}
          key={link.id}
          onClick={() => {
            dispatch(openAddPost());
          }}
          className={({ isActive }) =>
            isActive
              ? "items-center  px-5 flex flex-row text-lg text-emerald-500"
              : "items-center  text-slate-800 text-lg px-5  flex flex-row rounded-md "
          }
        >
          <section className="flex flex-row gap-3 items-center justify-center ">
            <div
              className={({ isActive }) =>
                isActive ? "text-white border-b-2" : "text-red-900"
              }
            >
              {link.icon}
            </div>
            <h1>{link.text}</h1>
          </section>
        </NavLink>
      ))}
    </section>
  );
};
export default LeftNav;

const links = [
  // { id: 1, text: "Feed", path: "/", icon: <TbBrandFeedly /> },
  { id: 2, text: "Add", path: "", icon: <BiMessageSquareAdd /> },
  // { id: 3, text: "Patients", path: "users", icon: <FiUsers /> },
];
