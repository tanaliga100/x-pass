import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import imgFront from "../assets/front.svg";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";

const Root = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="">
      <section className="">
        <Navbar />
      </section>
      <div className="flex flex-row h-screen">
        {isAuth && (
          <div className="basis-1/4 h-screen border-r-2  text-justify flex flex-col">
            <Sidebar />
          </div>
        )}
        <div className="basis-full flex-grow  ">
          <Outlet />
          {!isAuth && (
            <main className="w-screen flex flex-col items-center justify-center text-center pt-3">
              <img
                src={imgFront}
                alt="dp"
                width={300}
                height={300}
                className="items-center text-center"
              />
              <div className="leading-10 uppercase tracking-wide text-4xl  font-bold text-emerald-600 p-3 py-10  text-center ">
                Make a quotable lyrics of your{" "}
                <span className="bg-emerald-400 text-white p-1 px-2 rounded-lg">
                  favorite
                </span>{" "}
                song
              </div>
              <p className=" p-1 text-lg font-bold w-1/3">
                Encourage a wider audience to join in, sparking discussions,
                comments, and the sharing of their artistic viewpoints. This
                dynamic environment will turn your lyrics into a thriving hub of
                creativity and meaningful connections.
              </p>
            </main>
          )}
        </div>
      </div>
    </div>
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
