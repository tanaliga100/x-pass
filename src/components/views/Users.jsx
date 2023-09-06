import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/userSlice";
import Header from "../shared/Header";
import User from "./User";

const Users = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // EARLY RETURN
  if (loading) {
    return <h1> Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-y-auto min-h-full  ">
      <Header title="List of Registered Accounts" />
      <ul className="px-10 flex flex-row flex-wrap gap-10">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
export default Users;
