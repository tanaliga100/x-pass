/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import Home from "../components/shared/Home";
import { openAddPost } from "../store/features/uiSlice";
const Feed = () => {
  // check ui conditions here...
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  React.useEffect(() => {}, [isAuth]);

  const dispatch = useDispatch();
  return (
    <>
      {isAuth ? (
        <div className="bg-transparent h-screen text-xl text-gray-500 z-30">
          <button
            className="p-5 font-bold w-3/6 rounded-lg border-x-2 hover:border-emerald-300 flex flex-row gap-4 items-center z-10"
            onClick={() => dispatch(openAddPost())}
          >
            What's on your mind ? <TfiWrite size={25} />
          </button>
          <hr className=" bg-emerald-100 my-5" />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};
export default Feed;
