import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import emptyProfileImage from "../../assets/empty.svg";
const Followers = () => {
  const users = useSelector((state) => state.user.users);
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">List of your Followers</h2>
      <ul className="flex flex-row flex-grow gap-10 flex-wrap pt-5">
        {users.map((user) => (
          <Link
            to={user.id}
            key={user.id}
            className="mb-4 flex flex-col gap-3 items-center border-b-2 pb-2"
          >
            <div className="flex items-center flex-col gap-1">
              <img
                src={user.profileImage || emptyProfileImage}
                alt={user.name}
                className="w-12 h-12 rounded-full mr-2 object-cover"
              />
              <div className="text-lg font-medium">{user.name}</div>
              <div className="text-sm font-base   bg-indigo-500 text-white p-1 rounded-md ">
                {user.followers || 909} followers
              </div>
            </div>
            <div className="text-blue-500">@{user.username}</div>
            <div className="text-gray-500">{user.email}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Followers;
