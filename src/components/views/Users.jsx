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
    return (
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Content className=" flex flex-col m-3 text-center justify-center">
      <h6 className=" mb-3">Registered Accounts</h6>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </Content>
  );
};
export default Users;

const Content = styled.main``;

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
