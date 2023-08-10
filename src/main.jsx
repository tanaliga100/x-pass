import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./state/store.js";

// console.log("Hello there firebase firestore");

// writeSpecialDay();
// addNewDocument();
// readSingleDocument();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
