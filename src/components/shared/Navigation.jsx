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
        All Quotes
      </NavLink>
      <NavLink
        to="/new-quote"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        <BiMessageAdd size={20} />
        {"  "}
        Add Quote
      </NavLink>
    </Header>
  );
};
export default Navigation;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 80%;

  a {
    text-decoration: none;
    gap: 1rem;
    display: flex;
    text-align: center;
    align-items: center;
    padding-left: 2rem;
    font-size: large;
    font-weight: 600;
  }
  .nav-link {
    color: black;
  }
`;
