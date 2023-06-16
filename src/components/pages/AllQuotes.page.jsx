import React from "react";
import { BsListStars } from "react-icons/bs";
import { styled } from "styled-components";
import { getAllQuotes } from "../../api/api";
import useHttp from "../../hooks/use-http";
import SearchLyrics from "../UI/SearchLyrics";
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
          <p>List of All Quotable Lyrics</p>
          <button className="btn">
            {state.data && state.data.length > 0 && "Sort"}
          </button>
          <SearchLyrics />
        </div>
        {"   "}
      </section>
      {state.data && state.data.length > 0 ? (
        <QuoteItem quotes={state.data} />
      ) : (
        <Fallback>
          <h1>No Lyrics Found..</h1>
          <p>please create</p>
        </Fallback>
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
      flex-direction: row;
      justify-content: baseline;
      align-items: center;
      gap: 2rem;
    }
  }
  section {
    display: flex;
    padding-bottom: 1rem;
    /* box-shadow: 0px 5px 0px 0.1px; */
    .btn {
      padding: 0.3rem 1rem;
      font-size: smaller;
      font-weight: 800;
      color: teal;

      background-color: transparent;
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

const Fallback = styled.div`
  display: grid;
  padding: 10rem;
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;
