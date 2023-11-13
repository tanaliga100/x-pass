import { useDispatch, useSelector } from "react-redux";

const Quotes = () => {
  const isReadyToAdd = useSelector((state) => state.modal.isAddPost);
  const dispatch = useDispatch();

  return (
    <div className="bg-black p-10 fixed inset-0 flex items-center justify-center z-50">
      {isReadyToAdd && <section className="z-60"></section>}
    </div>
  );
};

export default Quotes;

//  <Header title="Add Document to the Feed" />
//             <Form />
