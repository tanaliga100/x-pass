import React from "react";
import { styled } from "styled-components";
import MainNavigation from "./MainNavigation";
const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <MainContent>{props.children}</MainContent>
    </React.Fragment>
  );
};

export default Layout;

export const MainContent = styled.main`
  display: grid;
  padding: 0 1rem;
  grid-template-columns: 20% 80%;
`;
