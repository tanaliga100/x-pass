import React from "react";
import { useNavigate } from "react-router-dom";
import { addQuote } from "../../api/api";
import useHttp from "../../hooks/use-http";
import QuoteForm from "../views/quotes/QuoteForm";
const NewQuotePage = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (status === "completed") {
      navigate("/");
    }
  }, [status]);

  // HANDLE FORM SUBMISSION || PERSISTENT
  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <div className="h-screen ">
      <QuoteForm onAdd={addQuoteHandler} />
    </div>
  );
};
export default NewQuotePage;
