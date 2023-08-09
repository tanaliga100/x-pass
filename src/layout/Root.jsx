import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Profile from "../components/shared/Profile";

const Root = () => {
  return (
    <div className="">
      <section className="">
        <Navbar />
      </section>
      <div className="flex flex-row h-screen pt-8">
        <div className="basis-1/4 h-screen border-r-2  text-justify flex flex-col">
          <Profile />
        </div>
        <div className="basis-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Root;
