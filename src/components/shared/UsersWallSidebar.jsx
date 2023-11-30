import React from "react";
import usersPhoto from "../../assets/empty.svg";
const UsersWallSidebar = () => {
  return (
    <div className="items-center flex flex-col p-5">
      <img src={usersPhoto} alt="Users Image" width={100} height={100} />
      <pre>Name</pre>
    </div>
  );
};

export default UsersWallSidebar;
