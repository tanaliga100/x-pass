import React from "react";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const QuoteItem = (props) => {
  return (
    <Wrapper>
      {props.quotes && props.quotes.length > 0 ? (
        props.quotes.map((quote) => (
          <Link
            to={`${quote.id}`}
            key={quote.id}
            className="link"
            state={{ quote: quote.id }}
          >
            <Content key={quote.id}>
              <h1>{quote.text}</h1>
              <small>
                {quote.author}
                <GrFormView size={25} />
              </small>
            </Content>
          </Link>
        ))
      ) : (
        <p className="status">
          No Quotes Found
          <Link to="/new-quote">Add Quote</Link>
        </p>
      )}
    </Wrapper>
  );
};
export default QuoteItem;

const Wrapper = styled.main`
  padding-top: 3rem;
  color: crimson;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  a {
    text-decoration: none;
    color: teal;
    padding: 1rem;

    &:hover {
      background-color: #ffffff7f;
    }

    h1 {
      font-size: xx-large;
      font-weight: 100;
    }
    small {
      color: black;
      font-size: 0.5rem;
      font-weight: 1;
      display: flex;
      letter-spacing: 1px;
      align-items: center;
    }
  }
`;

const Content = styled.main`
  display: grid;
  gap: 1rem;
`;
