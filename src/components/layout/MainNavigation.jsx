import React from "react";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";
import logotrans from "../../logo-trans.png";

const MainNavigation = () => {
  return (
    <Header>
      <div>
        <Link to="/">
          <img src={logotrans} alt="logo" width={200} height={120} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/quotes" className="link">
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

export default MainNavigation;

const Header = styled.div`
  min-height: 4rem;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  justify-content: start;

  div {
    margin-left: 2rem;
  }

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
