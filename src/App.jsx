// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { default as Login } from "./components/views/Login";
// import Register from "./components/views/Register";
// import Timeline from "./components/views/Timeline";
// import UserDetails from "./components/views/UserDetails";
// import Users from "./components/views/Users";
// import { useTheme } from "./context/themeContext";
// import Auth from "./layout/Auth";
// import Root from "./layout/Root";
// import Feed from "./pages/Feed";
// import Profile from "./pages/Profile";
// import Quotes from "./pages/Quotes";
// function App() {
//   const { theme } = useTheme();
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//       children: [
//         {
//           index: true,
//           element: <Feed />,
//         },
//         {
//           path: "add",
//           element: <Quotes />,
//         },
//         {
//           path: "users",
//           element: <Users />,
//         },
//         {
//           path: "users/:id",
//           element: <UserDetails />,
//         },
//         {
//           path: "timeline",
//           element: <Timeline />,
//         },
//         {
//           path: "profile",
//           element: <Profile />,
//         },

//         {
//           path: "auth",
//           element: <Auth />,
//           children: [
//             {
//               index: true,
//               element: <Login />,
//             },
//             {
//               path: "register",
//               element: <Register />,
//             },
//           ],
//         },
//       ],
//     },
//   ]);

//   return (
//     <div className={`app ${theme}`}>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { default as Login } from "./components/views/Login";
import Register from "./components/views/Register";
import Timeline from "./components/views/Timeline";
import UserDetails from "./components/views/UserDetails";
import Users from "./components/views/Users";
import { useTheme } from "./context/themeContext";
import { default as AuthLayout } from "./layout/AuthLayout";
import { default as RootLayout } from "./layout/RootLayout";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Quotes from "./pages/Quotes";

function App() {
  const { theme } = useTheme();

  // Define your routes using createRoutesFromElements

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Feed />} />
        <Route path="add" element={<Quotes />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="profile" element={<Profile />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className={`app ${theme}`}>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
