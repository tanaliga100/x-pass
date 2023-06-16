import React from "react";
import { AiOutlineRollback } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { getSingleQuote } from "../../../api/api";
import useHttp from "../../../hooks/use-http";
const QuoteDetails = () => {
  const params = useParams();
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
    <Wrapper>
      <Link to=".." relative="route">
        {" "}
        <AiOutlineRollback />
        Back to Lyrics
      </Link>
      <PageWrapper>
        {state.data && (
          <Content>
            <h1>{state?.data.text}</h1>
            <pre>{state?.data.author}</pre>
          </Content>
        )}
        {"    "}
        <Comments>
          <p>Great job!</p>
          <p>Well done!</p>
          <p>Impressive work!</p>
          <p>Keep it up!</p>
          {/* Condition   HERE  */}
          <button>Add Comment</button>
        </Comments>
      </PageWrapper>
    </Wrapper>
  );
};

export default QuoteDetails;
const Wrapper = styled.main`
  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

const PageWrapper = styled.main`
  display: grid;
  grid-template-columns: 70% 30%;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding: 0.3rem;
  margin: 0 auto;
  width: 80%;
`;

const Content = styled.div`
  width: 100%;
  min-height: 80%;
  color: black;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* background-image: url("https://images.pexels.com/photos/1525589/pexels-photo-1525589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover; */
  /* box-shadow: 0px 0px 0px 10px whitesmoke; */
  padding: 4em;
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
