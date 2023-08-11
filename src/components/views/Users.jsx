import { useSelector } from "react-redux";
import Header from "../shared/Header";
import User from "./User";
const Users = () => {
  const users = useSelector((state) => state.user.users);
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-y-auto min-h-full  ">
      <Header title="List of active accounts" />

      <ul className="px-10 flex flex-row flex-wrap gap-10">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
export default Users;
