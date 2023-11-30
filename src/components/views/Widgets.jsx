import { CiTimer } from "react-icons/ci";
import { IoIosTime } from "react-icons/io";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useTheme } from "../../context/themeContext";

const Widgets = () => {
  const currentUser = useSelector((state) => state.auth.user);
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <section className="flex flex-col items-center gap-3">
        <CiTimer size={30} />
        <p
          className={`${
            theme === "light" ? "text-black" : "text-white"
          }text-center  text-xs font-bold  mx-3 mb-1 `}
        >
          Created at:
        </p>
        {currentUser.creationTime}
      </section>
      <section className="flex flex-col items-center gap-3">
        <IoIosTime size={30} />
        <p
          className={`${
            theme === "light" ? "text-black" : "text-white"
          }text-center  text-xs font-bold  mx-3 mb-1 `}
        >
          Last SignIn :
        </p>
        {currentUser.lastSignInTime}
      </section>
    </div>
  );
};

export default Widgets;
