import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/features/userSlice";
import User from "./User";

const Users = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // EARLY RETURN~
  if (loading) {
    return <h1> Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Content className=" flex flex-col m-3 text-center justify-center">
      <h6 className="font-extrabold text-sm mb-3">Registered Accounts</h6>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </Content>
  );
};
export default Users;

const Content = styled.main`
  font-size: x-small;
`;

import styled from "styled-components";

// const Heading = styled.p`
//   text-align: center;
//   width: 100%;
//   padding-bottom: 1rem;
//   color: #008035;
//   line-height: 1rem;
//   font-weight: 600;
//   font-size: medium;
// `;
