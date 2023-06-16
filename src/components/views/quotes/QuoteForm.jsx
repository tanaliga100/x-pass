import React from "react";
import { styled } from "styled-components";

const QuoteForm = () => {
  return (
    <form>
      <FormWrapper>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Write a beatiful quote here..."
        />
        <button type="submit">Add Quote</button>
      </FormWrapper>
    </form>
  );
};

export default QuoteForm;

const FormWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  textarea {
    width: 80%;
  }

  button {
    width: 20%;
    border: none;
    background-color: crimson;
    color: white;
    padding: 0.5rem;
    font-size: small;
    font-weight: 300;
  }
`;
