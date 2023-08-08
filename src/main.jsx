import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import {
  addNewDocument,
  readSingleDocument,
  writeSpecialDay,
} from "./lib/api.js";

console.log("Hello there firebase firestore");

writeSpecialDay();
addNewDocument();
readSingleDocument();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
