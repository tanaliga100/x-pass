import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import logotrans from "../../assets/logo-trans.png";

const Header = () => {
  return (
    <HeaderContent>
      <Link to="/">
        <img src={logotrans} alt="logo" width={200} height={80} />
      </Link>
    </HeaderContent>
  );
};

export default Header;
const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: left;
  min-height: 3rem;
  color: #008080;
  background-color: #20010108;
  font-size: larger;
  font-weight: 700;
`;
