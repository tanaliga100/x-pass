import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../state/uiSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-emerald-950 p-5 flex flex-row justify-between place-items-center align-middle">
      {/* LEFT SECTION */}
      <Link>
        <h1 className="font-bold text-3xl text-white">Quotivate</h1>
        <p className="text-normal text-white">
          Make a notable lyrics of the song
        </p>
      </Link>
      {/* RIGHT SECTION */}
      <div className="flex flex-row gap-4 p-3 text-justtify">
        <Link to="auth" onClick={() => dispatch(openModal())}>
          <h1 className="font-bold text-base  text-white pr-10">
            Create an Account
          </h1>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
