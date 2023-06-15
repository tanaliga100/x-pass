import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return <FooterContent>Footer</FooterContent>;
};

export default Footer;
const FooterContent = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  min-height: 5rem;
  align-items: center;
  color: black;
  font-size: larger;
  font-weight: 700;
`;
