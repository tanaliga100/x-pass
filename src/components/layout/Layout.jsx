import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import MainNavigation from "./MainNavigation";
const RootLayout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <Outlet />
    </React.Fragment>
  );
};

export default RootLayout;

export const MainContent = styled.main`
  display: grid;
  padding: 0 1rem;
  grid-template-columns: 20% 80%;
`;
