import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layout/RootLayout";
import AllQuotesPage from "./components/pages/AllQuotes.page";
import NewQuotePage from "./components/pages/NewQuote.page";
import NotFound from "./components/pages/NotFound.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<AllQuotesPage />} />
        <Route path=":quoteID" element={<h1>Quote Details</h1>} />
        <Route path="/new-quote" element={<NewQuotePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
