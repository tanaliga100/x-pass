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
  console.log("isreadtoPost", isReadyToAddPost);
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
      <nav
        className={`${
          isScrolled
            ? "fixed top-0 border-b-6 border-black/30 "
            : "sticky top-0"
        }   z-100 max-h-[10%] w-full overflow-auto `}
      >
        <Navbar />
      </nav>
      <Layout>
        {isAuth && (
          <SidebarOutlet>
            <Sidebar />
          </SidebarOutlet>
        )}
        <MainOutlet
          className={`${
            isAuth ? "mx-auto text-center items-center" : "w-full"
          } overflow-auto scroll-smooth 
         bg-slate-50`}
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

const Layout = styled.section`
  margin: 5px auto;
  width: 86dvw;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
const SidebarOutlet = styled.section`
  flex-grow: 1;

  max-width: 15%;
  max-height: 50vh;
  padding: 2rem;
  background-color: #e9f1f15c;
`;
const MainOutlet = styled.section`
  height: 85dvh;
  flex-grow: 3;
  max-width: 65%;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  align-items: center;
`;

const UsersLayout = styled.div`
  max-width: 20%;
  flex-grow: 1;
  background-color: #e9f1f15c;
  max-height: 30vh;
  border-radius: 10px;
`;
