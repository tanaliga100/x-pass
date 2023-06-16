import React from "react";
import styled from "styled-components";

const Validator = (props) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <Message>Please fill in all the fields</Message>
        <Button onClick={() => props.onClose()}>Ok</Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Validator;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Message = styled.p`
  font-size: large;
  font-weight: 500;
  color: #333;
`;

const Button = styled.button`
  width: 60%;
  background-color: transparent;
  margin: 0 auto;
  border: none;
  padding: 0.3rem;
  border: 1px solid crimson;
  border-radius: 4px;
  color: crimson;

  &:hover {
    cursor: pointer;
    background-color: crimson;
    color: white;
  }
`;
