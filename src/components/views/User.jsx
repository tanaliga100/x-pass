/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <Link
      // eslint-disable-next-line react/prop-types
      to={props.user.id}
      className=""
    >
      <div className=" flex flex-row p-5 items-center text-center gap-1">
        <img
          src={props.user.profileImage || emptyProfileImage}
          alt={props.user.name}
          className="w-12 h-12 rounded-full mr-2 object-cover"
        />
        <p className="bg-emerald-500 font-extrabold text-white rounded-md px-3 py-1 m-3 text-sm hover:bg-emerald-900 ">
          Add
        </p>
        <div className="text-lg font-medium">{props.user.name}</div>
        <div className="text-gray font-bold text-sm p-1 rounded-md ">
          {props.user.email}
        </div>
      </div>
    </Link>
  );
};
export default User;

import emptyProfileImage from "../../assets/empty.svg";
