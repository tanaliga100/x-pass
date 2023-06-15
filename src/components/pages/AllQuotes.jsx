import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { getAllQuotes } from "../../api/api";
import useHttp from "../../hooks/use-http";

const AllQuotes = () => {
  // pull the hooks for request
  const state = useHttp(getAllQuotes, true);
  console.log({ state });
  // invoke using useEffect
  React.useEffect(() => {
    state.sendRequest();
  }, [state.sendRequest]);
  // handle the error and status
  if (state.error) {
    return <div>{error}</div>;
  }

  if (state.status === "pending") {
    return <div>Loading...</div>;
  }
  // display the retrieved data
  return (
    <Wrapper>
      {state.data &&
        state.data.map((quote) => (
          <Content key={quote.id}>
            <h1>{quote.text}</h1>
            <p>{quote.author}</p>
            <Link to=".">View </Link>
          </Content>
        ))}
    </Wrapper>
  );
};

export default AllQuotes;

const Wrapper = styled.main`
  color: black;
  display: flex;
  flex-direction: column;
`;
const Content = styled.section`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  padding-bottom: 1rem;
`;
