import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Navigation from "../shared/Navigation";
const RootLayout = () => {
  return (
    <section>
      <header>
        <Header />
      </header>
      <MainContent>
        <div className="navigation">
          <Navigation />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
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
  padding-top: 1rem;
  gap: 1rem;
  min-height: 30rem;
  display: grid;
  grid-template-columns: 20% 80%;
`;
