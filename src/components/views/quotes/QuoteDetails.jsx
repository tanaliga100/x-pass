import React from "react";
import { BsListStars } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const QuoteDetails = () => {
  const state = useLocation();
  console.log(state);

  return (
    <PageWrapper>
      <h1 className="title">
        <div className="content">
          <BsListStars size={20} />
          Quote Details
        </div>
        {"   "}
      </h1>
      {state.quote ? (
        <Content>
          <small>{state?.quote?.id}</small>
          <h1>{state?.quote?.text}</h1>
          <pre>{state?.quote?.author}</pre>
        </Content>
      ) : (
        "Loading..."
      )}
    </PageWrapper>
  );
};

export default QuoteDetails;

const PageWrapper = styled.main`
  .title {
    padding-bottom: 2rem;
    font-size: large;
    color: crimson;
    font-weight: 300;

    .content {
      display: flex;
      justify-content: baseline;
      align-items: center;
      gap: 1rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  background-color: teal;
  color: black;
`;
