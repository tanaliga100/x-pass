import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import UsersWallSidebar from "../components/shared/UsersWallSidebar";
import Timeline from "../components/views/Timeline";
import Users from "../components/views/Users";
import { useTheme } from "../context/themeContext";
import Profile from "../pages/Profile";
import { LoadingWrapper } from "./LoadingLayout";
const RootLayout = () => {
  const { theme } = useTheme();
  const location = useLocation();
  console.log("location", location.pathname);

  const inUsersPage = location.pathname.startsWith("/users/");
  const inUsersProfile = location.pathname.startsWith("/profile");

  console.log("in users page ?", inUsersPage);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  React.useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
  }, []);

  // const location = useLocation();
  // const dontShowNav = location.pathname == "/timeline";

  const isOnTimeLine = Boolean(location.pathname === "/timeline");

  return (
    <Main>
      {isAuth && (
        <NavbarOutlet
          theme={theme}
          className={`${
            isScrolled
              ? "fixed top-0 border-b-6 border-black/30 "
              : "sticky top-0"
          }    `}
        >
          <Navbar />
        </NavbarOutlet>
      )}
      <Layout>
        {isOnTimeLine || inUsersProfile ? (
          <MainOutlet>
            {isOnTimeLine && <Timeline />}
            {inUsersProfile && <Profile />}
          </MainOutlet>
        ) : (
          <>
            {isAuth && (
              <SidebarOutlet theme={theme}>
                {inUsersPage ? <UsersWallSidebar /> : <Sidebar />}
              </SidebarOutlet>
            )}
            <MainOutlet
              theme={theme}
              className="
           overflow-y-auto scroll-smooth 
         "
            >
              <Outlet />
            </MainOutlet>
            {isAuth && (
              <RightSideContainer theme={theme}>
                <UsersLayout theme={theme}>
                  <Users />
                </UsersLayout>
                <NewBlock theme={theme}>
                  <LoadingWrapper />
                </NewBlock>
              </RightSideContainer>
            )}
          </>
        )}
      </Layout>
    </Main>
  );
};

export default RootLayout;
const Main = styled.main`
  background-color: transparent;
`;
const NavbarOutlet = styled.nav`
  display: flex;
  background-color: ${({ theme }) =>
    theme === "light" ? "#7fa396" : "#0103042a"};
  height: 10dvh;
`;

const Layout = styled.section`
  display: flex;
  flex-direction: row;
  width: 90dvw;
  margin: 0 auto;
  height: 90dvh;
`;
const SidebarOutlet = styled.section`
  flex: 1;
  margin-top: 1rem;
  /* width: ${({ isAuth }) => (isAuth ? "40%" : "0")}; */
  max-height: 60dvh;
  /* box-shadow: 0px 1px 10px 2px rgba(7, 32, 2, 0.2); */

  box-shadow: ${({ theme }) =>
    theme === "light"
      ? "0px 1px 10px 2px rgba(49, 223, 18, 0.122)"
      : "0px 1px 10px 2px rgba(22, 111, 4, 0.2)"};

  color: ${({ theme }) => (theme === "light" ? "#263b45" : "#7fa396")};
`;

const MainOutlet = styled.section`
  /* height: ${({ isAuth }) => (isAuth ? "20dvh " : "90dvh")}; */
  flex: 2.5;
  /* width: ${({ isAuth }) => (isAuth ? "50%" : "100%")}; */
  /* min-width: 65%; */
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
  height: 90dvh;
  align-items: center;
  background-color: ${({ isAuth }) => (isAuth ? "#e9f1f1c0" : "transparent")};
  color: ${({ theme }) => (theme === "light" ? "#263b45" : "#7fa396")};
  overflow-y: scroll;
  scrollbar-width: none;
  scrollbar-color: ${({ theme }) =>
      theme === "light" ? "#263b4551" : "#7fa396"}
    transparent;

  &::-webkit-scrollbar {
    width: 0; /* You can adjust the width as needed */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme === "light" ? "#263b45" : "#7fa396"};
  }
`;
const RightSideContainer = styled.div`
  display: grid;
  grid-template-rows: 70% 20%;
  flex: 1;
  gap: 3rem;
  margin-top: 1rem;
  flex-direction: column;
  max-height: 80dvh;
  color: ${({ theme }) => (theme === "light" ? "#263b45" : "#7fa396")};
`;

const UsersLayout = styled.div`
  /* max-width: 20%; */
  /* width: ${({ isAuth }) => (isAuth ? "10dvw" : "0")}; */
  font-size: 80%;
  font-weight: 900;
  flex: 1;
  overflow-y: scroll;
  scrollbar-width: none;
  scrollbar-color: ${({ theme }) =>
      theme === "light" ? "#263b4551" : "#7fa396"}
    transparent;

  &::-webkit-scrollbar {
    width: 5px; /* You can adjust the width as needed */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme === "light" ? "#263b45" : "#7fa396"};
  }
  box-shadow: ${({ theme }) =>
    theme === "light"
      ? "0px 1px 10px 2px rgba(49, 223, 18, 0.122)"
      : "0px 1px 10px 2px rgba(22, 111, 4, 0.2)"};

  color: ${({ theme }) => (theme === "light" ? "#263b45" : "#7fa396")};
`;

const NewBlock = styled.div`
  flex: 1;
  font-size: x-small;
  box-shadow: ${({ theme }) =>
    theme === "light"
      ? "0px 1px 10px 2px rgba(49, 223, 18, 0.122)"
      : "0px 1px 10px 2px rgba(22, 111, 4, 0.2)"};
  text-align: center;
  color: ${({ theme }) => (theme === "light" ? "#263b45" : "#7fa396")};
`;
