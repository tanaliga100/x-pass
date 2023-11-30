/* eslint-disable react/prop-types */
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { default as emptyProfileImage } from "../../assets/empty.svg";
import { useTheme } from "../../context/themeContext";

const User = (props) => {
  const { theme } = useTheme();
  const email = props.user.email;
  const atIndex = email.indexOf("@");
  const name = email.slice(0, atIndex);

  return (
    <Link
      // eslint-disable-next-line react/prop-types
      to={`users/${props.user.id}`}
      className=" hover:shadow-lg duration-300 p-1"
    >
      <Content className="" theme={theme}>
        <section className="flex flex-column items-center gap-3 ">
          <img
            src={props.user.profileImage || emptyProfileImage}
            alt={props.user.name}
            width={20}
            height={20}
            className="flex-1 rounded-full mr-2 object-cover z-10"
          />
          {/* <div className="text-lg font-medium">{props.user.name}</div> */}
          <div className="text-gray   p-1 rounded-md font-sans ">
            {name.toUpperCase()}
          </div>{" "}
          <div className="grow text-gray   p-1 rounded-md text-xs font-normal font-sans">
            {email.slice(0, 10)}...
          </div>{" "}
          <BsPatchCheckFill className="" size={20} />
          {/* <p className="bg-emerald-500 font-extrabold text-white rounded-md text-sm hover:bg-emerald-900 w-auto">
            Add
          </p> */}
        </section>
      </Content>
    </Link>
  );
};

export default User;

const Content = styled.main`
  font-size: x-small;
  color: ${({ theme }) => (theme === "light" ? "#2f3d36" : "#d5ede1")};
`;
