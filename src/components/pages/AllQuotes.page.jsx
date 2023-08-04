import React from "react";
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
    <div>
      <section className=" scroll-smooth min-h-screen">
        {state.data && state.data.length > 0 ? (
          <QuoteItem quotes={state.data} />
        ) : (
          <section>
            <h1>No Lyrics Found..</h1>
            <p>please create</p>
          </section>
        )}
      </section>
    </div>
  );
};
export default AllQuotesPage;
