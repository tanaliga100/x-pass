import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../state/uiSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div
      className=" text-emerald-500  py-4 flex flex-row place-items-center 
shadow-lg shadow-emerald-500/10
    
    "
    >
      {/* LEFT SECTION */}
      <div className="basis-1/4">
        <Link>
          <h1 className="font-bold text-3xl text-center uppercase ">
            Quoty
            <span className="text-emerald-900">vate</span>
          </h1>
        </Link>
      </div>
      {/* RIGHT SECTION */}
      <div className="basis-full">
        <div className="flex flex-row justify-between place-items-center">
          {/* LEFT */}
          <section className="flex flex-row gap-5">
            <h1 className="font-bold text-xl rounded-md  text-emerald-500">
              Feed
            </h1>
            <h1 className="font-bold text-xl rounded-md  text-emerald-500">
              Notifications
            </h1>
            <h1 className="font-bold text-xl rounded-md  text-emerald-500">
              Profile
            </h1>
          </section>
          {/* RIGHT */}
          <section className=" pr-10">
            <Link to="auth" onClick={() => dispatch(openModal())}>
              <h1 className="font-bold text-base p-2  border-2 rounded-md border-emerald-500 text-emerald-500">
                Create an Account
              </h1>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
