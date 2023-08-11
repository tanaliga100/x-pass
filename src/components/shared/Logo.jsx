import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex flex-row items-center ">
      <Link>
        <h1 className="font-extrabold text-2xl font-sans text-center text-black">
          Quoty
          <span className="text-emerald-400">vate</span>
        </h1>
      </Link>
    </div>
  );
};
export default Logo;
