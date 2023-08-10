import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import imgFront from "../../assets/front.svg";
import img from "../../assets/profile.svg";
import { demoAccount } from "../../state/authSlice";
/* eslint-disable react/prop-types */

const Sidebar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { email } = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();

  const handleDemoAccount = () => {
    dispatch(demoAccount());
    navigate("/");
  };

  return (
    <div className="text-center flex flex-col justify-center   ">
      {/* Sidebar RENDERING  */}
      {isAuthenticated ? (
        <div className="justify-center flex flex-col gap-3 place-items-center align-middle pt-3">
          <img src={img} alt="dp" width={75} height={100} />
          <span className=" text-md font-bold text-emerald-950">
            {/* {userName.charAt(0).toUpperCase() + userName.slice(1)} */}
            {email}
          </span>
          <p className="text-lg text-emerald-950">
            <span className="text-sm px-5 font-normal border-2 border-emerald-500 text-emerald-500 p-1 rounded-md">
              {email}
            </span>
          </p>{" "}
          {/* <p className="text-lg text-emerald-950">
            <span className="text-sm px-5 font-normal  border-2 border-emerald-500 text-emerald-500  p-1 rounded-md">
              {followers} followers
            </span>
          </p> */}
          {/* <div className="text-lg uppercase font-bold text-indigo-500  p-3 pt-4  text-center">
            Make a notable lyrics of your favorite song
          </div> */}
          {/* <p className=" p-3 text-xl font-thin">
            Invite others to engage, comment, and share their thoughts,
            transforming your lyrics into a hub of creative expression and
            connection
          </p> */}
          {/* CONDITIONS AND CONDITIONS */}
          <main className="flex flex-row gap-1">
            <Link
              to="timeline"
              className="uppercase  font-black border-2 bg-emerald-500 rounded-lg  px-5 text-white   p-3 m-5"
            >
              Timeline
            </Link>
            {/* <Link
              to="followers"
              className="uppercase font-black border-2  bg-emerald-500  rounded-lg  px-5 text-white   p-3 m-5"
            >
              Followers
            </Link> */}
          </main>
        </div>
      ) : (
        <div className="text-center flex flex-col justify-center place-items-center">
          <img src={imgFront} alt="dp" width={120} height={100} className="" />
          <button
            className="rounded-lg text-emerald-500 font-bold border-2 border-emerald-500  px-6 p-2 m-5 "
            onClick={handleDemoAccount}
          >
            Demo Account
          </button>
          <div className="leading-10 tracking-wide text-xl lowercase font-normal text-emerald-600 p-3 py-10  text-center ">
            Make a quotable lyrics of your{" "}
            <span className="bg-emerald-400 text-white p-1 px-2 rounded-lg">
              favorite
            </span>{" "}
            song
          </div>
          <p className=" p-1 text-lg font-thin">
            Invite others to engage, comment, and share their thoughts,
            transforming your lyrics into a hub of creative expression and
            connection
          </p>
          {/* <button className="rounded-lg text-emerald-500 font-bold border-2 border-emerald-500  p-3 m-5 ">
            <Link to="auth" onClick={() => dispatch(openModal())}>
              Create an Account
            </Link>
          </button> */}
        </div>
      )}
    </div>
  );
};
export default Sidebar;
