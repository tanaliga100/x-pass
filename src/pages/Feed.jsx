import { useState } from "react";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const ReactionButton = ({ text }) => {
  return (
    <button className="mr-2 text-gray-600 hover:text-blue-500">{text}</button>
  );
};

// eslint-disable-next-line react/prop-types
const Tweet = ({ username, text }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className=" tweet bg-white border rounded p-10  shadow-md ">
      <div className="username font-semibold mb-1 text-blue-500">
        @{username}
      </div>
      <div className="text mb-2">{text}</div>
      <div className="flex items-center">
        <ReactionButton text="Like" />
        <ReactionButton text="Comment" />
      </div>
      <div className="mt-4">
        <h2 className="font-semibold mb-2">Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="text-gray-700 mb-1">
              {comment}
            </li>
          ))}
        </ul>
        <form onSubmit={handleCommentSubmit} className="mt-2">
          <input
            type="text"
            placeholder="Add a comment..."
            className="border border-gray-300 p-2 w-full rounded"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

const Feed = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const [tweets] = useState([
    { username: "user1", text: "Just had a great meal! 🍔🍟" },
    { username: "user2", text: "Excited to start coding my new project! 💻🚀" },
    { username: "user3", text: "Enjoying a relaxing day at the beach. 🏖️☀️" },
    { username: "user2", text: "Excited to start coding my new project! 💻🚀" },
    { username: "user3", text: "Enjoying a relaxing day at the beach. 🏖️☀️" },
    { username: "user2", text: "Excited to start coding my new project! 💻🚀" },
    { username: "user3", text: "Enjoying a relaxing day at the beach. 🏖️☀️" },
    { username: "user2", text: "Excited to start coding my new project! 💻🚀" },
    { username: "user3", text: "Enjoying a relaxing day at the beach. 🏖️☀️" },
  ]);

  return (
    <div className=" overflow-y-auto ">
      <section className=" sticky top-0 flex flex-col gap-5">
        {isAuth &&
          tweets.map((tweet, index) => (
            <Tweet key={index} username={tweet.username} text={tweet.text} />
          ))}
      </section>
    </div>
  );
};

export default Feed;
