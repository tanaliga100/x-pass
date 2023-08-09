import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Profile from "../components/shared/Profile";

const Root = () => {
  const currentUser = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <div className="basis-1/4 h-screen border-r-2 text-justify flex flex-col">
          <Profile user={currentUser} />
        </div>
        <div className="basis-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Root;
