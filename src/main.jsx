import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/themeContext.jsx";
import "./index.css";
import store from "./store/store.js";

// writeSpecialDay();
// addNewDocument();
// readSingleDocument();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <ToastContainer
        className=" text-black text-center text-base w-[25%] font-bold"
        autoClose={300}
        hideProgressBar={true}
        theme="light"
      />
      <App />
    </ThemeProvider>
  </Provider>
);
