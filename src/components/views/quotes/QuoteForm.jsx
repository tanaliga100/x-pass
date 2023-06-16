import React, { useRef, useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
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
    <form onSubmit={handleSumitHandler}>
      {showModal && (
        <Modal className="modal">
          <div className="modal-content">
            <Validator onClose={handleCloseModal} />
          </div>
        </Modal>
      )}
      <FormWrapper>
        <textarea
          ref={quoteRef}
          name=""
          id=""
          cols="1"
          rows="3"
          placeholder="Write a notable lyrics here..."
        />
        <input
          ref={authorRef}
          type="text"
          name=""
          id=""
          placeholder="Artist Name..."
        />
        <button type="submit">
          <AiOutlineAppstoreAdd size={20} />
          Add
        </button>
      </FormWrapper>
    </form>
  );
};

export default QuoteForm;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;

const FormWrapper = styled.main`
  display: flex;

  flex-direction: column;
  gap: 1rem;

  textarea {
    background-image: url("https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg?auto=compress&cs=tinysrgb&w=600");
    background-position: top right;
    background-repeat: no-repeat;
    background-size: auto;
    color: grey;
    width: 80%;
    text-align: center;
    margin: 0 auto;
    padding: 1rem;
    border: none;
  }
  input {
    background-image: url("https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg?auto=compress&cs=tinysrgb&w=600");
    background-position: top;
    color: grey;

    width: 80%;
    padding: 1rem;
    border: none;
    margin: 0 auto;
  }

  button {
    width: 30%;
    border: none;
    background-color: crimson;
    color: white;
    padding: 0.5rem;
    font-size: small;
    font-weight: 300;
    margin: 0 auto;
    display: flex;
    gap: 0.4rem;
    &:hover {
      background-color: red;
      color: white;
      cursor: pointer;
    }
  }
`;
