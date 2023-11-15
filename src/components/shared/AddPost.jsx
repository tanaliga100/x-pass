/* eslint-disable react/no-unescaped-entities */
import { TfiWrite } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openAddPost } from "../../store/features/uiSlice";

const AddPost = () => {
  const dispatch = useDispatch();

  return (
    <main className="flex flex-col gap-5">
      <Post>
        <button
          type="button"
          className="p-5 font-bold w-full rounded-lg border-x-2 hover:border-emerald-300 flex flex-row gap-4 items-center z-10 bg-transparent text-emerald-500 inset-1"
          onClick={() => dispatch(openAddPost())}
        >
          What's on your mind ? <TfiWrite size={25} />
        </button>
      </Post>
      <Content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        laborum excepturi voluptates accusantium quia incidunt error quaerat
        doloremque aut? Delectus porro tempora in ea voluptas at ipsa
        consequatur ipsam voluptatem sed, dignissimos quia nisi! Voluptatibus
        reiciendis nobis, numquam ut adipisci odit fugit iure quos qui minus
        quas expedita repudiandae ipsam molestiae ad cumque nesciunt similique
        ipsum optio harum inventore. Ipsa quibusdam incidunt sunt architecto,
      </Content>
    </main>
  );
};

export default AddPost;
const Post = styled.div``;
const Content = styled.div``;
