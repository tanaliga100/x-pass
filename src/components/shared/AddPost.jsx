/* eslint-disable react/no-unescaped-entities */
import { TfiWrite } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { closeAddPost, openAddPost } from "../../store/features/uiSlice";
import Form from "../views/Form";

const AddPost = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isAddPost = useSelector((state) => state.modal.isAddPost);
  const navigate = useNavigate();

  const handleAddPost = () => {
    dispatch(openAddPost());
  };
  return (
    <Content className="">
      <div
        // className={`${
        //   theme === "light" ? "text-slate-900" : "text-emerald-400"
        // }
        className="
          p-5 font-bold w-auto rounded-lg border-x-2 hover:border-emerald-300 flex flex-row gap-4 items-center z-10 bg-transparent  inset-1 hover:cursor-pointer
          "
        onClick={() => handleAddPost()}
      >
        What's on your mind ?
      </div>
      {/* children */}
      {isAddPost && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-emerald-950 opacity-50"
            onClick={() => {
              dispatch(closeAddPost());
              navigate("/");
            }}
          ></div>
          <div
            className={`z-10  rounded-md shadow-md `}
            // onClick={() => {
            //   dispatch(closeAddPost());
            //   navigate("/");
            // }}
          >
            <Form />
          </div>
        </div>
      )}
      <Actions>
        {actions.map((item) => (
          <span className="flex flex-row gap-3 w-full" key={item.text}>
            <span className="icon">{item.icon}</span>
            <h1>{item.text}</h1>
          </span>
        ))}
      </Actions>
    </Content>
  );
};

export default AddPost;

const Post = styled.div``;
const Content = styled.div`
  font-size: smaller;
  width: 100%;
`;

const actions = [
  { id: 1, icon: <TfiWrite />, text: "Live Video" },
  { id: 2, icon: <TfiWrite />, text: "Photo/Video" },
  { id: 3, icon: <TfiWrite />, text: "Feeling/Activity" },
];

const Actions = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: row;

  span .icon {
    color: yellowgreen;
  }
`;
