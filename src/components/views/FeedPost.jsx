const FeedPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "posts"));
    onSnapshot(q, (snap) => {
      const postsData = [];
      snap.forEach((doc) => {
        console.log("posts", doc);
        postsData.push({
          id: doc.id,
          ...doc.data(),
        });
        setPosts(postsData);
      });
    });
  }, []);

  console.log("posts", posts);

  if (posts.length === 0) {
    return <LoadingWrapper />;
  }

  return (
    <Content>
      {posts.map((post) => {
        return (
          <div className="py-3" key={post.id}>
            <h1>{post.title}</h1>
            <h1>{post.lyrics}</h1>
            <h1>{post.author}</h1>
          </div>
        );
      })}
    </Content>
  );
};

export default FeedPost;

const Content = styled.main`
  font-size: x-small;
  padding-top: 1rem;
`;

import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../config/firebase.config";
import { LoadingWrapper } from "../../layout/LoadingLayout";
