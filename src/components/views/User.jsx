/* eslint-disable react/prop-types */
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const User = (props) => {
  const email = props.user.email;
  const atIndex = email.indexOf("@");
  const name = email.slice(0, atIndex);

  return (
    <Link
      // eslint-disable-next-line react/prop-types
      to={props.user.id}
      className=" flex flex-row gap-10 hover:shadow-lg duration-300 p-1"
    >
      <Content className=" flex flex-row  items-center text-center  ">
        <section className="flex flex-column items-center gap-3 justify-center">
          <img
            src={props.user.profileImage || emptyProfileImage}
            alt={props.user.name}
            width={30}
            height={30}
            className=" rounded-full mr-2 object-cover z-10"
          />
          {/* <div className="text-lg font-medium">{props.user.name}</div> */}
          <div className="text-gray   p-1 rounded-md font-sans ">
            {name.toUpperCase()}
          </div>{" "}
          <div className="text-gray   p-1 rounded-md text-xs font-bold font-sans">
            {email}
          </div>{" "}
          <BsPatchCheckFill size={20} />
          {/* <p className="bg-emerald-500 font-extrabold text-white rounded-md text-sm hover:bg-emerald-900 w-auto">
            Add
          </p> */}
        </section>
      </Content>
    </Link>
  );
};

export default User;

import styled from "styled-components";
import emptyProfileImage from "../../assets/empty.svg";

const Content = styled.main`
  font-size: x-small;
`;
