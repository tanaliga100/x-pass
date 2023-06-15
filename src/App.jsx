import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layout/Layout";

const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes"));
const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
const QuoteDetails = React.lazy(() =>
  import("./components/pages/QuoteDetails")
);
const NotFound = React.lazy(() => import("./components/pages/NotFound"));

// || @5pm : Push to dev environment and merge all the tested units

function App() {
  return (
    <Routes path="/" element={<RootLayout />}>
      <Route path="/quotes" element={<AllQuotes />} />
      <Route path="/quotes/:quoteID" element={<QuoteDetails />} />
      <Route path="/new-quote" element={<NewQuote />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
