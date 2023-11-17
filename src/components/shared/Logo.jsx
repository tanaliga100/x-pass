import { Link } from "react-router-dom";
import { useTheme } from "../../context/themeContext";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-row items-center justify-center">
      <Link>
        <h1
          className={`${
            theme === "light" ? "text-slate-900" : "text-white"
          } font-extrabold text-2xl font-sans text-center `}
        >
          Quoti{" "}
          <span
            className={`${
              theme === "light" ? "text-emerald-400" : "text-emerald-400"
            }`}
          >
            vate
          </span>
        </h1>
      </Link>
    </div>
  );
};
export default Logo;
