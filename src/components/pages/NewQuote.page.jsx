import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { addQuote } from "../../api/api";
import useHttp from "../../hooks/use-http";
import QuoteForm from "../views/quotes/QuoteForm";
const NewQuotePage = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (status === "completed") {
      navigate("/");
    }
  }, [status]);

  // HANDLE FORM SUBMISSION || PERSISTENT
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <PageWrapper>
      <h1 className="title">
        <div className="content"></div>
        {"   "}
      </h1>
      <QuoteForm onAdd={addQuoteHandler} />
    </PageWrapper>
  );
};
export default NewQuotePage;

const PageWrapper = styled.main`
  .title {
    padding-bottom: 2rem;
    font-size: large;
    color: crimson;
    font-weight: 300;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;
