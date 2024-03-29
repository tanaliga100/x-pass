import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useTheme } from "./context/themeContext";
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

import React, { Suspense, lazy } from "react";
import { Route, createRoutesFromElements } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "./hooks/useAuth";
import AuthLayout from "./layout/AuthLayout";
import LoadingLayout from "./layout/LoadingLayout";

function App() {
  const { theme } = useTheme();

  React.useEffect(() => {}, []);
  // Define your routes using createRoutesFromElements
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // IMPORTS OF LAZY LOADING
  const RootLayout = lazy(() => import("./layout/RootLayout"));
  const Feed = lazy(() => import("./pages/Feed"));
  // const Quotes = lazy(() => import("./pages/Quotes"));
  const Profile = lazy(() => import("./pages/Profile"));
  const Login = lazy(() => import("./components/views/Login"));
  const Register = lazy(() => import("./components/views/Register"));
  const Users = lazy(() => import("./components/views/Users"));
  const UserDetails = lazy(() => import("./components/views/UserDetails"));
  const Timeline = lazy(() => import("./components/views/Timeline"));

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route index element={<Feed />} />

        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="profile/:id" element={<Profile />} />
      </Route>

    )
  );
  useAuth(); // MANAGE AUTHENTICATION
  return (
    <>
      <Main className={` ${theme}`}>
        <Suspense fallback={<LoadingLayout />}>
          <RouterProvider router={routes} />
        </Suspense>
      </Main>
    </>
  );
}
export default App;

const Main = styled.main`
  width: 100dvw;
  height: 100dvh;
  transition: background-color 1s, color 1s;
`;
