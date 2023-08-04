import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Validator from "../../UI/Validator";
const QuoteForm = (props) => {
  // IMPORT HOOKS
  const quoteRef = useRef();
  const authorRef = useRef();
  const navigate = useNavigate();
  const [showModal, setShowValidator] = useState(false);

  // get the input value
  // pass the value as argument sa post request
  // then redirect to all quotes

  const handleCloseModal = () => {
    setShowValidator(false); // Close the modal
  };
  const handleSumitHandler = (e) => {
    e.preventDefault();
    const quoteRefValue = quoteRef.current.value;
    const authorRefValue = authorRef.current.value;
    if (quoteRefValue && authorRefValue) {
      quoteRef.current.value = "";
      authorRef.current.value = "";
      props.onAdd({ text: quoteRefValue, author: authorRefValue });
    } else {
      setShowValidator(true);
    }
  };

  return (
    <form onSubmit={handleSumitHandler} className=" ">
      {/* MODAL HERE */}
      {showModal && (
        <main className="modal">
          <div className="modal-content">
            <Validator onClose={handleCloseModal} />
          </div>
        </main>
      )}
      <div className="grid px-3 gap-5 border-none">
        <textarea
          className="p-3 w-full text-lg mt-3 font-normal  border-emerald-900 brightness-90 border-lg"
          ref={quoteRef}
          name=""
          id=""
          cols="1"
          rows="3"
          placeholder="Write a notable lyrics here..."
        />
        <input
          className=" p-3 w-full  font-normal  border-emerald-900 brightness-90 border-lg "
          ref={authorRef}
          type="text"
          name=""
          id=""
          placeholder="Artist Name..."
        />
        <button
          type="submit"
          className="font-bold text-center text-base bg-emerald-900   w-40 text-white p-2"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
