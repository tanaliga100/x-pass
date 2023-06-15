import React from "react";
import { BsListStars } from "react-icons/bs";
import { styled } from "styled-components";
import { getAllQuotes } from "../../api/api";
import useHttp from "../../hooks/use-http";
import QuoteDetails from "../views/quotes/QuoteDetails";

const AllQuotesPage = () => {
  // pull the hooks for request
  const state = useHttp(getAllQuotes, true);
  // invoke using useEffect
  React.useEffect(() => {
    state.sendRequest();
  }, [state.sendRequest]);
  // handle the error and status
  if (state.error) {
    return <div>{state.error}</div>;
  }
  if (state.status === "pending") {
    return <div>Loading...</div>;
  }
  // display the retrieved data
  return (
    <PageWrapper>
      <h1 className="title">
        <div className="content">
          <BsListStars size={20} />
          List of All Quotes
        </div>
        {"   "}
      </h1>
      {state.data ? (
        <QuoteDetails quotes={state.data} />
      ) : (
        <h1>Please create...</h1>
      )}
    </PageWrapper>
  );
};
export default AllQuotesPage;

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
