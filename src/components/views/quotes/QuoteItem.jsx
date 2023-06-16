import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const QuoteItem = (props) => {
  return (
    <Wrapper>
      {props.quotes && props.quotes.length > 0 ? (
        props.quotes.map((quote) => (
          <Content key={quote.id}>
            <section>
              <button className="edit">
                <AiFillEdit />
              </button>
              <button className="delete">
                <AiFillDelete />
              </button>
            </section>
            <Link
              to={`${quote.id}`}
              key={quote.id}
              className="link"
              state={{ quote: quote.id }}
            >
              <h1>
                {quote.text}
                {"    "}
                <span>__"{quote.author}"</span>
              </h1>
              <small>
                <p>
                  seeMore
                  <GrFormView size={25} />
                </p>
              </small>
            </Link>
          </Content>
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
  width: 90%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  color: teal;

  span {
    color: crimson;
    margin-right: 1rem;
    font-size: medium;
    font-weight: 700;
    font-style: oblique;
  }

  a {
    text-decoration: none;
    padding: 1rem;
    &:hover {
      color: crimson;
      background-color: #ffffff7f;
    }

    h1 {
      font-size: large;
      font-weight: 100;
    }
    small {
      color: black;
      font-size: 0.5rem;
      font-weight: 1;
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      letter-spacing: 1px;
      align-items: center;

      p {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`;

const Content = styled.main`
  display: grid;
  gap: 1rem;

  section {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    .edit {
      color: green;
    }
    .delete {
      color: red;
    }
    button {
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
