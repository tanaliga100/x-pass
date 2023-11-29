import { FaTags } from "react-icons/fa6";
import { MdOutlineTitle } from "react-icons/md";

import { FaPersonDotsFromLine } from "react-icons/fa6";
import styled from "styled-components";
const FormContent = styled.section`
  font-size: small;
  width: 30dvw;
`;

const Form = () => {
  // FUNCTIONS
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContent>
      <form action="" onSubmit={() => handleSubmit()}>
        <div className="mb-4  flex flex-row items-center gap-3 ">
          <MdOutlineTitle size={50} />
          <label htmlFor="title" className="  font-medium text-gray-700">
            Title of the Song
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-1 w-full border-2 rounded-md focus:ring-emerald-500"
          />
        </div>
        <div className="mb-4 flex flex-row items-center gap-3 ">
          <FaTags size={40} />
          <label htmlFor="tags" className="font-medium text-gray-700">
            Tags
          </label>

          <input
            type="text"
            id="tags"
            name="tags"
            className="mt-1 p-1 w-full border-2 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4 flex flex-row items-center gap-3 ">
          <MdLyrics size={40} />
          <label htmlFor="lyrics" className="block  font-medium text-gray-700">
            Lyrics of the Song
          </label>
          <textarea
            id="lyrics"
            name="lyrics"
            rows="4"
            className="mt-1 p-1 w-full border-2 rounded-md focus:ring focus:ring-blue-200"
          ></textarea>
        </div>
        <div className="mb-4 flex flex-row items-center gap-3 ">
          <FaPersonDotsFromLine size={40} />
          <label htmlFor="author" className="block font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="mt-1 p-1 w-full border-2 rounded-md focus:ring focus:ring-blue-200"
          />
        </div>
        <hr />
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-950 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 block w-[100%]"
        >
          Submit
        </button>
      </form>
    </FormContent>
  );
};

export default Form;

import { MdLyrics } from "react-icons/md";
