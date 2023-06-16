import React from "react";
import { BsListStars } from "react-icons/bs";
import { styled } from "styled-components";
import { getAllQuotes } from "../../api/api";
import useHttp from "../../hooks/use-http";
import { default as QuoteItem } from "../views/quotes/QuoteItem";

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

  return (
    <PageWrapper>
      <section className="title">
        <div className="content">
          <BsListStars size={20} />
          List of All Quotable Lyrics
          <button className="btn">
            {state.data && state.data.length > 0 && "Sort"}
          </button>
        </div>
        {"   "}
      </section>
      {state.data && state.data.length > 0 ? (
        <QuoteItem quotes={state.data} />
      ) : (
        <h1>Please create...</h1>
      )}
    </PageWrapper>
  );
};
export default AllQuotesPage;

const PageWrapper = styled.main`
  .title {
    font-size: small;
    color: crimson;
    font-weight: 300;

    .content {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: baseline;
      align-items: center;
      gap: 2rem;
    }
  }
  section {
    display: flex;
    padding-bottom: 1rem;
    box-shadow: 0px 5px 0px 0.1px;
    .btn {
      padding: 0.3rem 1rem;
      font-size: smaller;
      font-weight: 200;
      color: teal;
      background-color: white;
      border: none;
      &:hover {
        color: crimson;
        background-color: white;
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
`;
