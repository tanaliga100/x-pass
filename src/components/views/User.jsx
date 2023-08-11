/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <Link
      // eslint-disable-next-line react/prop-types
      to={props.user.id}
      className="shadow-2xl rounded-xl  contrast-200 border"
    >
      <div className=" flex flex-col p-5 items-center text-center gap-5">
        <img
          src={props.user.profileImage || emptyProfileImage}
          alt={props.user.name}
          className="w-12 h-12 rounded-full mr-2 object-cover"
        />
        <div className="text-lg font-medium">{props.user.name}</div>
        <div className="text-sm font-base   bg-indigo-500 text-white p-1 rounded-md ">
          {props.user.users || 909} Users
        </div>
      </div>
      <section className="flex flex-col gap-1 p-3 text-center">
        <div className="text-blue-500">@{props.user.username}</div>
        <div className="text-gray-500">{props.user.email}</div>
      </section>
    </Link>
  );
};
export default User;

import emptyProfileImage from "../../assets/empty.svg";
