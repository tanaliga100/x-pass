import { useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Auth from "./layout/Auth";
import Root from "./layout/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          path: "quotes",
          element: <h1>Feed</h1>,
        },
        {
          path: "add",
          element: <h1>Add Quote</h1>,
        },
        {
          path: "users",
          element: <h1>Users</h1>,
        },
        {
          path: "auth",
          element: <Auth />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
  ]);

  const state = useSelector((state) => state);
  console.log("STATE", state);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
