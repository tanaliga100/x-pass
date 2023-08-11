import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Timeline from "./components/views/Timeline";
import Users from "./components/views/Users";
import Auth from "./layout/Auth";
import Root from "./layout/Root";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Quotes from "./pages/Quotes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Feed />,
        },
        {
          path: "add",
          element: <Quotes />,
        },
        {
          path: "users",
          element: <Users />,
        },
        //    {
        //      path: "followers",
        //      element: <Followers />,
        //    },
        {
          path: "timeline",
          element: <Timeline />,
        },
        {
          path: "profile",
          element: <Profile />,
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

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
