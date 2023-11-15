import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import Users from "../components/views/Users";
const RootLayout = () => {
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
      <NavbarOutlet
        className={`${
          isScrolled
            ? "fixed top-0 border-b-6 border-black/30 "
            : "sticky top-0"
        }   z-100 max-h-[10%] w-full overflow-auto `}
      >
        <Navbar />
      </NavbarOutlet>
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
          <UsersLayout>
            <Users />
          </UsersLayout>
        )}
      </Layout>
    </Main>
  );
};

export default RootLayout;

const Main = styled.main`
  background-color: transparent;
  z-index: 100;
  height: 100dvh;
  width: 100dvw;
`;
const NavbarOutlet = styled.nav`
  background-color: #00000041;
  color: black;
`;

const Layout = styled.section`
  margin: 5px auto;
  height: 80dvh;
  width: 70dvw;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
const SidebarOutlet = styled.section`
  flex-grow: 1;
  width: ${({ isAuth }) => (isAuth ? "15%" : "0%")};
  max-height: 50vh;
  padding: 2rem;
  background-color: #e9f1f15c;
`;
const MainOutlet = styled.section`
  height: 80dvh;
  flex-grow: 3;
  width: ${({ isAuth }) => (isAuth ? "20%" : "100%")};
  /* min-width: 65%; */
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  align-items: center;
  background-color: ${({ isAuth }) => (isAuth ? "#e9f1f15c" : "transparent")};
`;
const UsersLayout = styled.div`
  /* max-width: 20%; */
  width: ${({ isAuth }) => (isAuth ? "15%" : "0%")};
  flex-grow: 1;
  background-color: #e9f1f15c;
  max-height: 40vh;
  border-radius: 10px;
`;
