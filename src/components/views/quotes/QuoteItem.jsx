import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
const QuoteItem = (props) => {
  return (
    <div className="flex flex-col gap-10 py-5 h-96  overflow-y-auto">
      {props.quotes && props.quotes.length > 0 ? (
        props.quotes.map((quote) => (
          <section
            key={quote.id}
            className="border-l-8 px-3 flex flex-row justify-between align-middle place-items-center gap-40"
          >
            <Link
              to={`${quote.id}`}
              key={quote.id}
              className="link"
              state={{ quote: quote.id }}
            >
              <h1 className="font-thin text-2xl">
                {quote.text}
                <span>__"{quote.author}"</span>
              </h1>
            </Link>
            <section className="flex flex-row justify-start gap-5 py-5 pr-10">
              <button className="edit">
                <AiFillEdit />
              </button>
              <button className="delete">
                <AiFillDelete />
              </button>
            </section>
          </section>
        ))
      ) : (
        <p className="status">
          No Quotes Found
          <Link to="/new-quote">Add Quote</Link>
        </p>
      )}
    </div>
  );
};
export default QuoteItem;
