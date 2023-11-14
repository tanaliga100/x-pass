/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useSelector } from "react-redux";
import AddPost from "../components/shared/AddPost";
import Home from "../components/shared/Home";
import Users from "../components/views/Users";
const Feed = () => {
  // check ui conditions here...
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  React.useEffect(() => {}, [isAuth]);

  return (
    <main>
      {isAuth ? (
        <div className="flex flex-row flex-grow bg-transparent  text-xl text-gray-500 z-30 ">
          <section className="basis-4/5 m-3 bg-white p-3 rounded-md">
            <AddPost />
          </section>
          <section className="basis-auto bg-white p-5 m-3 rounded-lg">
            <Users />
          </section>
        </div>
      ) : (
        <section>
          <Home />
        </section>
      )}
    </main>
  );
};
export default Feed;
