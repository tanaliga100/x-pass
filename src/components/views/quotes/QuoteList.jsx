import React from "react";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const QuoteLists = (props) => {
  return (
    <Wrapper>
      {props.quotes &&
        props.quotes.map((quote) => (
          <Content key={quote.id}>
            <Link to={`/${quote.id}`} className="link" state={{ quote: quote }}>
              <h1>{quote.text.slice(0, 15)}...</h1>
              <pre>
                {quote.author}
                <GrFormView size={25} />
              </pre>
            </Link>
          </Content>
        ))}
    </Wrapper>
  );
};
export default QuoteLists;

const Wrapper = styled.main`
  color: black;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(5, 1fr);
`;
const Content = styled.section`
  padding: 1rem;
  width: 200px;
  height: fit-content;
  box-shadow: 0px 0px 0px 4px white;

  h1 {
    font-size: large;
    font-weight: 500;
  }
  pre {
    font-size: xx-small;
    font-weight: 200;
    color: crimson;
    font-style: italic;
    padding: 0.4rem 0;
  }
  .link {
    color: black;
  }

  a {
    text-align: left;
    text-decoration: none;

    pre {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
