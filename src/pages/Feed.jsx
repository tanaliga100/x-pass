/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useSelector } from "react-redux";
import AddPost from "../components/shared/AddPost";
import Home from "../components/shared/Home";
import FeedPost from "../components/views/FeedPost";
import { fetchPosts } from "../store/features/postSlice";
const Feed = () => {
  // check ui conditions here...
  // const {posts, status, error } = useSelector((state) => state.post);
  // console.log("POSTS", posts);
  // const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  React.useEffect(() => {}, [isAuth]);

  // const fetchPosts = async () => {
  //   const postsCol = collection(db, "posts");
  //   const querySnap = await getDocs(postsCol);
  // };
  fetchPosts();

  return (
    <main>
      {isAuth ? (
        <div className="">
          <section className="  rounded-md">
            <AddPost />
          </section>
          <hr />
          <FeedPost />
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
