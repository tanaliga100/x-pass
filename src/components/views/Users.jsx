import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/features/userSlice";
import Header from "../shared/Header";
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
    <div className="  ">
      <Header title="People you may know.." />
      <ul className=" flex flex-col  ">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
export default Users;
