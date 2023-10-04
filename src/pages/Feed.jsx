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
          <Search placeholder="Search Post..." />
          <hr className="py-3 bg-emerald-100 my-5" />
          <main className="bg-transparent text-emerald-500 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            obcaecati iste dolorem assumenda facere pariatur commodi suscipit
            necessitatibus porro beatae, dolores saepe nam id animi placeat
            veniam! Perferendis beatae ullam fugit aliquid officia sit officiis
            labore repellendus. Harum vero quae magni voluptatem architecto,
            laborum asperiores reiciendis atque, ut quam ad. Blanditiis
            obcaecati temporibus necessitatibus sit, sed velit vero dolorum. Et
            quisquam accusamus corporis optio inventore excepturi consequatur
            placeat est officia cupiditate cum tempore explicabo eius laboriosam
            molestias maiores unde dolores maxime ipsa, nisi sequi enim. Neque
            repudiandae dolores ullam delectus. Facere, illum? Est ipsam
            perspiciatis voluptatem laboriosam ducimus! Facilis, ad!
          </main>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};
export default Feed;
