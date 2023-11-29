import { useDispatch, useSelector } from "react-redux";
import Form from "../components/views/Form";

const Quotes = () => {
  const isReadyToAdd = useSelector((state) => state.modal.isAddPost);
  const dispatch = useDispatch();

  return (
    // <div className="text-black p-10 fixed inset-0 flex items-center justify-center z-50 w-[50%] flex-row ">
    <section className="children z-100  p-5">
      <Form />
    </section>
    // </div>
  );
};

export default Quotes;

//  <Header title="Add Document to the Feed" />
//             <Form />
