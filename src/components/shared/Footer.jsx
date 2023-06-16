import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContent>
      <pre>
        Coded by: jordantanaliga<span>100</span>
      </pre>
    </FooterContent>
  );
};

export default Footer;

const FooterContent = styled.div`
  position: fixed;
  bottom: 0;

  right: 0px;
  width: 100%;
  display: flex;
  min-height: 4rem;
  padding-left: 1rem;

  color: black;

  align-items: center;
  background-image: url("");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  pre {
    font-size: 0.5rem;
    font-weight: 200;
  }

  span {
    color: crimson;
  }
`;
