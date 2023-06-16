import React from "react";
// import { BiMessageAdd } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Navigation = () => {
  return (
    <Header>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        <CgNotes size={20} />
        {"  "}
        Your Lyrics
      </NavLink>
      {/* <NavLink
        to="/new-quote"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        <BiMessageAdd size={20} />
        {"  "}
        Add Your Fav
      </NavLink> */}
    </Header>
  );
};
export default Navigation;

const Header = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  padding: 0.7rem 0;
  min-height: 80%;

  a {
    text-decoration: none;
    gap: 0.4rem;
    display: flex;
    text-align: center;
    align-items: center;
    padding-left: 4rem;
    padding: 1rem;
    font-size: 0.3rem;
    font-weight: 800;
  }
  .nav-link {
    color: white;
  }
`;
