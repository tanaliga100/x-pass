import React from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { getSingleQuote } from "../../../api/api";
import useHttp from "../../../hooks/use-http";
const QuoteDetails = () => {
  const params = useParams();
  console.log("params", params);
  const state = useHttp(getSingleQuote, true);

  React.useEffect(() => {
    state.sendRequest(params.quoteID);
  }, []);
  // LOADING HANDLING...
  if (state.status === "pending") {
    return <div>Loading...</div>;
  }
  // ERROR HANDLING...
  if (state.error) {
    return <div>Error : {state.error}</div>;
  }
  return (
    <PageWrapper>
      <Link to=".." relative="route">
        {" "}
        <AiOutlineRollback />
        Back to Lyrics
      </Link>
      {state.data && (
        <Content>
          <h1>{state?.data.text}</h1>
          <pre>{state?.data.author}</pre>
        </Content>
      )}
      {"    "}
      <section>
        <Link to=".">Load Comments</Link>
      </section>
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
      justify-content: start;
      align-items: start;
      gap: 1rem;
    }
  }
  a {
    text-decoration: none;
    display: flex;
    gap: 0.6rem;
    align-items: center;
    padding-bottom: 3rem;
  }
  pre {
    color: teal;
  }
  section {
    text-align: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    a {
      text-decoration: none;
      color: white;
      justify-content: flex-end;
      background-color: crimson;
      padding: 0.5rem;
      border-radius: 3px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  color: black;
  background-image: url("https://images.pexels.com/photos/1525589/pexels-photo-1525589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  /* box-shadow: 0px 0px 0px 10px whitesmoke; */
  padding: 4rem;

  h1 {
    color: white;
    font-size: 5rem;
    font-weight: 800;
  }
`;

// {
//   state.quote ? (
//     <Content>
//       <small>{state?.quote?.id}</small>
//       <h1>{state?.quote?.text}</h1>
//       <pre>{state?.quote?.author}</pre>
//     </Content>
//   ) : (
//     "Loading..."
//   );
// }
