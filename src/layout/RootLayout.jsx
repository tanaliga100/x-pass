import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
const RootLayout = () => {
  //   const theme = useTheme();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  React.useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="w-full h-full mx-auto flex flex-col ">
      <nav
        className={`${
          isScrolled
            ? "fixed top-0  border-b-8 border-black/30 "
            : "sticky top-0"
        } w-full bg-slate-50 z-50  `}
      >
        <Navbar />
      </nav>
      <section>
        <main className="flex flex-grow-1">
          {isAuth && (
            <section className="w-3/12 lg:w-1/5 h-full bg-slate-50 ">
              {/* Display sidebar when logged in */}
              <Sidebar />
            </section>
          )}
          <section
            className={`${isAuth ? "w-full" : "w-full"}  z-10  bg-slate-50`}
          >
            <Outlet />
          </section>
        </main>
      </section>
    </section>
  );
};

export default RootLayout;

//  <section className=" overflow-y-auto flex flex-grow bg-slate-100">
//    {/* LEFT PANEL */}
//    <div className="sticky top-0 basis-1/5 h-auto  text-justify flex flex-col p-2">
//      {/* <Sidebar /> */}
//    </div>
//    {/* RIGHT PANEL */}
//    <div className="sticky top-0 basis-full h-auto  text-justify flex flex-col p-2">
//      {/* <Prompt /> */}
//    </div>
//    <div className=" basis-full h-[95%] text-justify flex flex-col p-2 "></div>
//  </section>;
