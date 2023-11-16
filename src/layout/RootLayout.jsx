import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import Users from "../components/views/Users";
import { useTheme } from "../context/themeContext";
const RootLayout = () => {
  const { theme } = useTheme();
  //   const theme = useTheme();
  const isReadyToAddPost = useSelector((state) => state.modal.isAddPost);
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

  return (
    <Main>
      {isAuth && (
        <NavbarOutlet
          theme={theme}
          className={`${
            isScrolled
              ? "fixed top-0 border-b-6 border-black/30 "
              : "sticky top-0"
          }   overflow-auto `}
        >
          <Navbar />
        </NavbarOutlet>
      )}
      <Layout>
        {isAuth && (
          <SidebarOutlet>
            <Sidebar />
          </SidebarOutlet>
        )}
        <MainOutlet
          className="
           overflow-auto scroll-smooth 
         "
        >
          <Outlet />
        </MainOutlet>
        {isAuth && (
          <RightSideContainer>
            <UsersLayout>
              <Users />
            </UsersLayout>
            <NewBlock>New Block</NewBlock>
          </RightSideContainer>
        )}
      </Layout>
    </Main>
  );
};

export default RootLayout;

const Main = styled.main`
  background-color: transparent;
  color: black;
`;
const NavbarOutlet = styled.nav`
  display: flex;
  color: white;
  background-color: ${({ theme }) =>
    theme === "light" ? "#8ba99e" : "#0103042a"};
  height: 10dvh;
`;

const Layout = styled.section`
  display: flex;
  flex-direction: row;
  width: 70dvw;
  margin: 0 auto;
  height: 90vh;
`;

const SidebarOutlet = styled.section`
  flex: 1;
  margin-top: 1rem;
  /* width: ${({ isAuth }) => (isAuth ? "40%" : "0")}; */
  max-height: 30vh;
  box-shadow: 1px 1px 10px 0.1px rgba(0, 0, 0, 0.1);
`;
const MainOutlet = styled.section`
  /* height: ${({ isAuth }) => (isAuth ? "20dvh " : "90dvh")}; */
  flex: 2.5;
  /* width: ${({ isAuth }) => (isAuth ? "50%" : "100%")}; */
  /* min-width: 65%; */
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  align-items: center;
  background-color: ${({ isAuth }) => (isAuth ? "#e9f1f1c0" : "transparent")};
`;

const RightSideContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 3rem;
  margin-top: 1rem;
  flex-direction: column;
  max-height: 70vh;
`;

const UsersLayout = styled.div`
  /* max-width: 20%; */
  /* width: ${({ isAuth }) => (isAuth ? "10dvw" : "0")}; */
  flex: 1;
  box-shadow: 1px 1px 10px 0.1px rgba(0, 0, 0, 0.1);
`;

const NewBlock = styled.div`
  flex: 1;
  box-shadow: 1px 1px 10px 0.1px rgba(0, 0, 0, 0.1);

  /* Add your styling for the new block here */
`;
