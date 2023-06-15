import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layout/RootLayout";
import AllQuotes from "./components/pages/AllQuotes";
import NotFound from "./components/pages/NotFound";

// const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes"));
// const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
// const QuoteDetails = React.lazy(() =>
//   import("./components/pages/QuoteDetails")
// );
// const NotFound = React.lazy(() => import("./components/pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index path="quotes" element={<AllQuotes />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;

{
  /* <Route path=":quoteID" element={<QuoteDetails />} />
      <Route path="new-quote" element={<NewQuote />} />
      <Route path="*" element={<NotFound />}></Route> */
}
