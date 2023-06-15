import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const QuoteDetails = (props) => {
  console.log({ props });
  return (
    <Wrapper>
      {props.quotes &&
        props.quotes.map((quote) => (
          <Content key={quote.id}>
            <Link to="." className="link">
              <h1>{quote.text.slice(0, 10)}...</h1>
              <p>{quote.author}</p>
            </Link>
          </Content>
        ))}
    </Wrapper>
  );
};

export default QuoteDetails;

const Wrapper = styled.main`
  color: black;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;
const Content = styled.section`
  padding-bottom: 1rem;
  width: 200px;
  height: fit-content;

  h1 {
    font-size: x-large;
  }
  p {
    font-size: small;
    font-style: italic;
    padding: 0.4rem 0;
  }
  .link {
    color: black;
  }

  a {
    text-align: left;
    text-decoration: none;
  }
`;
