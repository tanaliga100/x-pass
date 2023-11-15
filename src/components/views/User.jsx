/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const User = (props) => {
  const email = props.user.email;
  const atIndex = email.indexOf("@");
  const name = email.slice(0, atIndex);

  return (
    <Link
      // eslint-disable-next-line react/prop-types
      to={props.user.id}
      className=" flex flex-row gap-10"
    >
      <div className=" flex flex-row  items-center text-center ">
        <img
          src={props.user.profileImage || emptyProfileImage}
          alt={props.user.name}
          className="w-12 h-12 rounded-full mr-2 object-cover"
        />
        <section>
          {/* <div className="text-lg font-medium">{props.user.name}</div> */}
          <div className="text-gray font-bold text-sm p-1 rounded-md ">
            {name}
          </div>
          {/* <p className="bg-emerald-500 font-extrabold text-white rounded-md text-sm hover:bg-emerald-900 w-auto">
            Add
          </p> */}
        </section>
      </div>
    </Link>
  );
};
export default User;

import emptyProfileImage from "../../assets/empty.svg";
