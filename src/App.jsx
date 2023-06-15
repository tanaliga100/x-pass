import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layout/RootLayout";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<h1>All Quotes</h1>} />
        <Route path=":quoteID" element={<h1>Quote Details</h1>} />
        <Route path="/new-quote" element={<h1>New Quote</h1>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
