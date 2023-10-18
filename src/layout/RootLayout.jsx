import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
// import Sidebar from "../components/shared/Sidebar";
const RootLayout = () => {
  //   const theme = useTheme();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <section className="w-screen h-screen mx-auto flex flex-col">
      <nav className={`sticky top-0  `}>
        <Navbar />
      </nav>
      {/* <section>{<Outlet />}</section> */}
      <section>
        <main className="flex flex-grow-1">
          {isAuth && (
            <section className="w-1/4 lg:w-1/5">
              {/* Display sidebar when logged in */}
              <Sidebar />
            </section>
          )}
          <section className={isAuth ? "w-5/6" : "w-full"}>
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
