import React from "react";
import { BsPencil } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
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
    <div className="py-10">
      <Link
        to=".."
        relative="route"
        className="bg-emerald-950 brightness-200 p-3 text-white "
      >
        Back to Lyrics
      </Link>
      <main>
        {state.data && (
          <div className="py-10">
            <h1 className="text-2xl font-bold py-1">{state?.data.text}</h1>
            <pre>{state?.data.author}</pre>
          </div>
        )}
      </main>
      <section className="flex flex-row justify-start place-items-center gap-4">
        <h1> Want to add a comment on this ? </h1>
        <BsPencil size={25} />
        <button className=" font-bold text-sm" onClick={() => {}}>
          Here...
        </button>
      </section>
    </div>
  );
};

export default QuoteDetails;
