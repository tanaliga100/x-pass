import React from "react";
import { BiMessageAdd } from "react-icons/bi";
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
        ALL QUOTES
      </NavLink>
      <NavLink
        to="/new-quote"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        <BiMessageAdd size={20} />
        {"  "}
        ADD QUOTE
      </NavLink>
    </Header>
  );
};
export default Navigation;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 80%;

  a {
    text-decoration: none;
    gap: 01rem;
    display: flex;
    text-align: center;
    align-items: center;
    padding-left: 2rem;
    letter-spacing: 0.1rem;
    font-size: small;
    font-weight: 500;
  }
  .nav-link {
    color: black;
  }
`;
