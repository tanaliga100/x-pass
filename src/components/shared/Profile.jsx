import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../assets/profile.svg";
import { openModal } from "../../state/uiSlice";

const Profile = (props) => {
  const dispatch = useDispatch();
  const { userName, email, followers } = props.user;

  return (
    <div className="text-center flex flex-col justify-center">
      {/* PROFILE RENDERING  */}
      {props ? (
        <div className="justify-center flex flex-col gap-3 place-items-center pt-3 align-middle">
          <img src={img} alt="dp" width={75} height={100} />
          <span className=" text-md font-bold text-emerald-950">
            {userName.charAt(0).toUpperCase() + userName.slice(1)}
          </span>
          <p className="text-lg text-emerald-950">
            <span className="text-sm px-5 font-normal border-2 border-emerald-500 text-emerald-500 p-1 rounded-md">
              {email}
            </span>
          </p>{" "}
          <p className="text-lg text-emerald-950">
            <span className="text-sm px-5 font-normal  border-2 border-emerald-500 text-emerald-500  p-1 rounded-md">
              {followers} followers
            </span>
          </p>
          <div className="text-lg uppercase font-normal text-emerald-600 p-3 pt-4  text-center">
            Make a notable lyrics of your favorite song
          </div>
          <p className=" p-3 text-xl font-thin">
            Invite others to engage, comment, and share their thoughts,
            transforming your lyrics into a hub of creative expression and
            connection
          </p>
          <button className="uppercase bg-emerald-500 text-white  p-3 m-5 ">
            <Link to="auth" onClick={() => dispatch(openModal())}>
              demo account
            </Link>
          </button>
        </div>
      ) : (
        <>
          <div className="text-xl uppercase font-normal text-emerald-600 p-3 py-16  text-center">
            Make a quotable lyrics of your favorite song
          </div>
          <p className=" p-3 text-2xl font-thin">
            Invite others to engage, comment, and share their thoughts,
            transforming your lyrics into a hub of creative expression and
            connection
          </p>
          <button className="bg-emerald-900 text-white  p-3 m-5 ">
            <Link to="auth" onClick={() => dispatch(openModal())}>
              Create an Account
            </Link>
          </button>
        </>
      )}
      <pre className=" static pt-96">
        built by <span>jordantanaliga100</span>
      </pre>
    </div>
  );
};
export default Profile;
