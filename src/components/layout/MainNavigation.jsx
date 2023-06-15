import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import logotrans from "../../assets/logo-trans.png";

const Navigation = () => {
  return (
    <Header>
      <div>
        <Link to="/">
          <img src={logotrans} alt="logo" width={200} height={80} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" className="link">
              {" "}
              Add A Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default Navigation;

const Header = styled.div`
  background-color: teal;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  justify-content: start;

  nav {
    ul {
      display: flex;
      column-gap: 2rem;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    a {
      text-decoration: none;
      color: tan;
    }

    li {
      list-style: none;
    }
  }
`;

// <Header>
//   <title>Great Quotes</title>
//   <nav>
//     <ul>
//       <li>
//         <NavLink to="/quotes"> All Quotes</NavLink>
//       </li>
//       <li>
//         <NavLink to="/new-quote"> Add a Quote</NavLink>
//       </li>
//     </ul>
//   </nav>
// </Header>;
