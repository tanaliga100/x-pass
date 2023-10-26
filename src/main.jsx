import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/themeContext.jsx";
import "./index.css";
import store from "./store/store.js";
// console.log("Hello there firebase firestore");

// writeSpecialDay();
// addNewDocument();
// readSingleDocument();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <ToastContainer
        className=" text-black text-center text-xl w-[25%] font-extrabold"
        autoClose={300}
        hideProgressBar={true}
        theme="dark"
      />
      <App />
    </ThemeProvider>
  </Provider>
);
