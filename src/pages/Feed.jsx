import React from "react";
import { useSelector } from "react-redux";
import Home from "../components/shared/Home";
import Search from "../components/shared/Search";
const Feed = () => {
  // check ui conditions here...
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  React.useEffect(() => {}, [isAuth]);

  return (
    <>
      {isAuth ? (
        <div className="bg-transparent  min-h-full  ">
          <Search placeholder="Search Document..." />
          <hr className="py-3 bg-emerald-100 my-5" />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};
export default Feed;
