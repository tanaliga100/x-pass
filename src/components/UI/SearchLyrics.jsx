import React from "react";
import { styled } from "styled-components";

const SearchLyrics = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="search..." className="" />;
    </Wrapper>
  );
};

export default SearchLyrics;
const Wrapper = styled.main`
  input {
    padding: 0.4rem;
    border: none;
  }
`;
