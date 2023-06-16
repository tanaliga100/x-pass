import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
// import logotrans from "../../assets/logo-trans.png";

const Header = () => {
  return (
    <HeaderContent>
      <Link to="/">
        {/* <img src={logotrans} alt="logo" width={200} height={80} /> */}
        <h1>Quotiv@te</h1>
        <small>Make a notable lyrics of a song...</small>
      </Link>
    </HeaderContent>
  );
};

export default Header;

const HeaderContent = styled.div`
  display: flex;
  min-height: 3rem;
  color: #008080;
  font-size: larger;
  font-weight: 700;

  a {
    text-decoration: none;
    margin-left: 2rem;
    padding: 0 1rem;
    gap: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: crimson;

    h1 {
      font-size: x-large;
      letter-spacing: 0.1rem;
      font-weight: 900;
    }
    small {
      font-size: small;
      font-weight: 300;
      color: teal;
    }
  }
`;
