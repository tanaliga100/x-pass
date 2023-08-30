import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Prompt from "../components/shared/Prompt";
import Sidebar from "../components/shared/Sidebar";
const Root = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const state = useSelector((state) => state);
  console.log("STATES", state);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <main className="w-screen h-screen mx-auto flex flex-col">
      <nav className={`sticky top-0 `}>
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
        {/* {!isAuth ? (
          <div className=" flex-grow">
            <Prompt />
          </div>
        ) : (
          <div className="flex-grow p-2">
            <Outlet />
          </div>
        )} */}
      </section>
    </main>
  );
};
export default Root;

//  <div className="">
//    <section className="">
//      <Navbar />
//    </section>
//    <div className="flex flex-row h-screen pt-8">
//      <div className="basis-1/4 h-screen border-r-2  text-justify flex flex-col">
//        <Profile />
//      </div>
//      <div className="basis-full">
//        <Outlet />
//      </div>
//    </div>
//  </div>;

//  <section className=" overflow-y-auto scroll-smooth">
//         <section className="flex flex-row ">
//           {isAuth && (
//             <div className="basis-1/5  text-justify flex flex-col ">
//               <Sidebar />
//             </div>
//           )}
//           <div className="basis-full flex-grow  ">
//             {!isAuth ? (
//               <main className="  w-full flex flex-col items-center justify-center text-center pt-3 ">
//                 <img
//                   src={imgFront}
//                   alt="dp"
//                   width={300}
//                   height={300}
//                   className="items-center text-center"
//                 />
//                 <div className="leading-10 uppercase tracking-wide text-4xl  font-bold text-emerald-600 p-3 py-10  text-center ">
//                   Make a quotable lyrics of your{" "}
//                   <span className="bg-emerald-400 text-white p-1 px-2 rounded-lg">
//                     favorite
//                   </span>{" "}
//                   song
//                 </div>
//                 <p className=" p-1 text-lg font-bold w-1/3">
//                   Encourage a wider audience to join in, sparking discussions,
//                   comments, and the sharing of their artistic viewpoints. This
//                   dynamic environment will turn your lyrics into a thriving hub
//                   of creativity and meaningful connections.
//                 </p>
//               </main>
//             ) : (
//               <Outlet />
//             )}
//           </div>
//         </section>
