/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useSelector } from "react-redux";
import AddPost from "../components/shared/AddPost";
import Home from "../components/shared/Home";
const Feed = () => {
  // check ui conditions here...
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  React.useEffect(() => {}, [isAuth]);
  return (
    <main>
      {isAuth ? (
        <div className="">
          <section className="  rounded-md">
            <AddPost />
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
