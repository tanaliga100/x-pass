import React from "react";
import { styled } from "styled-components";

const Note = {
  fontSize: "1.4em",
  textAlign: "center",
  color: "grey",
};

const NotFound = () => {
  return (
    <Wrapper>
      <small>Page not Found !</small>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  width: 70%;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
`;
