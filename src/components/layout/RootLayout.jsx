import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../pages/Footer";
import Navigation from "../shared/MainNavigation";
const RootLayout = () => {
  return (
    <section>
      <header>
        <Navigation />
      </header>
      <MainContent>
        <Outlet />
      </MainContent>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default RootLayout;

const MainContent = styled.main`
  width: 100%;
  min-height: 25rem;
  display: grid;
  padding-left: 2rem;
  padding: 2rem 0;
  grid-template-columns: 20% 80%;
`;
