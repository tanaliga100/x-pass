import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import NewQuotePage from "../pages/NewQuote.page";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Navigation from "../shared/Navigation";
const RootLayout = () => {
  return (
    <section>
      <HeaderWrapper>
        <Header />
        <Navigation />
      </HeaderWrapper>
      <MainContent>
        <div className="side-panel">
          <NewQuotePage />
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
  min-height: 25rem;
  display: grid;
  grid-template-columns: 25% 75%;
`;

const HeaderWrapper = styled.section`
  display: flex;
  gap: 3rem;
  width: 100%;
  /* background-color: #20010108; */
  background-image: url("https://images.pexels.com/photos/2881261/pexels-photo-2881261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;
