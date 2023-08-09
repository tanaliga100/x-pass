import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Profile from "../components/shared/Profile";
import Sidebar from "../components/shared/Sidebar";

const Root = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Navbar />
      <div className="flex flex-row h-full ">
        <div className="basis-1/5 h-screen border-r-8 text-justify flex flex-col">
          {user ? <Sidebar /> : <Profile />}
        </div>
        <div className="basis-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Root;
