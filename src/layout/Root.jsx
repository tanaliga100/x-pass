import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Prompt from "../components/shared/Prompt";
import Sidebar from "../components/shared/Sidebar";
const Root = () => {
  //   const theme = useTheme();

  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <main className="w-screen h-screen mx-auto flex flex-col">
      <nav className={`sticky top-0  `}>
        <Navbar />
      </nav>
      <section className=" overflow-y-auto flex flex-grow bg-slate-100">
        {/* LEFT PANEL */}
        {isAuth && (
          <div className="sticky top-0 basis-1/5 h-auto  text-justify flex flex-col p-2">
            <Sidebar />
          </div>
        )}
        {/* RIGHT PANEL */}
        {!isAuth ? (
          <div className="sticky top-0 basis-full h-auto  text-justify flex flex-col p-2">
            <Prompt />
          </div>
        ) : (
          <div className=" basis-full h-[95%] text-justify flex flex-col p-2 ">
            <Outlet />
          </div>
        )}
      </section>
    </main>
  );
};
export default Root;
