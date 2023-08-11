import { useSelector } from "react-redux";
import User from "./User";
const Users = () => {
  const users = useSelector((state) => state.user.users);
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-y-auto">
      <div className="p-10">
        <h2 className="text-2xl font-semibold ">List of active Accounts</h2>
      </div>
      <ul className="px-10 flex flex-row flex-wrap gap-10">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
export default Users;
