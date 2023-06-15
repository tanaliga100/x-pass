import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  // const changeSortingHandler = () => {
  //   history.push({
  //     pathname: location.pathname,
  //     search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
  //   });
  // };

  return (
    <Fragment>
      <div>
        {/* <button onClick={() => {}}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button> */}
      </div>
      <ul>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
