import { FaTags } from "react-icons/fa6";
import { MdOutlineTitle } from "react-icons/md";

import { FaPersonDotsFromLine } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
const FormContent = styled.section`
  font-size: small;
  width: 30dvw;
  /* background-color: ${({ theme }) =>
    theme === "light" ? "#7fa396" : "#0103042a"}; */
`;
const Form = () => {
  // STATE
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [author, setAuthor] = useState("");

  // FUNCTIONS
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", title, tags, lyrics, author);

    // QUERY HERE...
    setTimeout(() => {
      navigate("/");
      dispatch(closeAddPost());
    }, 1000);
  };

  return (
    <FormContent
      theme={theme}
      className={`${
        theme === "light" ? "bg-emerald-950" : "bg-emerald-700 "
      } p-8 rounded-md text-white`}
    >
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-4  flex flex-row  items-center gap-3 ">
          <MdOutlineTitle size={20} />
          <label htmlFor="title" className="  font-medium ">
            Song Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-1 w-full border-2 rounded-md focus:ring-emerald-500 text-emerald-500 font-bold"
          />
        </div>
        <div className="mb-4 flex flex-row items-center gap-3 ">
          <FaTags size={20} />
          <label htmlFor="tags" className="font-medium ">
            Tags
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 p-1 w-full border-2 rounded-md focus:ring focus:ring-blue-200 text-emerald-500 font-bold"
          />
        </div>
        <div className="mb-4 flex flex-row items-center gap-3 ">
          <MdLyrics size={20} />
          <label htmlFor="lyrics" className="block  font-medium ">
            Lyrics of the Song
          </label>
          <textarea
            id="lyrics"
            name="lyrics"
            rows="4"
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
            className="mt-1 p-1 w-full border-2 rounded-md focus:ring focus:ring-blue-200 text-emerald-500 font-bold"
          ></textarea>
        </div>
        <div className="mb-4 flex flex-row items-center gap-3 ">
          <FaPersonDotsFromLine size={20} />
          <label htmlFor="author" className="block font-medium ">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 p-1 w-full border-2 rounded-md focus:ring focus:ring-blue-200 text-emerald-500 font-bold"
          />
        </div>
        <hr className="my-2" />
        <button
          type="submit"
          className="hover:bg-emerald-500  bg-emerald-900 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 block w-[100%]"
        >
          Submit
        </button>
      </form>
    </FormContent>
  );
};

export default Form;

import { useState } from "react";
import { MdLyrics } from "react-icons/md";
import { useTheme } from "../../context/themeContext";
import { closeAddPost } from "../../store/features/uiSlice";
