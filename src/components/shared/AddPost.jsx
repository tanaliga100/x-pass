/* eslint-disable react/no-unescaped-entities */
import { TfiWrite } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { openAddPost } from "../../store/features/uiSlice";

const AddPost = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="p-5 font-bold w-full rounded-lg border-x-2 hover:border-emerald-300 flex flex-row gap-4 items-center z-10 bg-transparent text-emerald-500 inset-1"
      onClick={() => dispatch(openAddPost())}
    >
      What's on your mind ? <TfiWrite size={25} />
    </button>
  );
};

export default AddPost;
