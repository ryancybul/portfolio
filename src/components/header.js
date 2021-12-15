// import { Link } from "gatsby"
import React from "react";
import styled from "styled-components";

const Header = function () {
  return (
    <Nav>
      <Title>
        <h1 className="title">&lt; RYAN CYBUL &gt;</h1>
        <h2>/*Web Developer*/</h2>
      </Title>
      <ul>
        <li>About</li>
        <li>Portfolio</li>
        <li>Thoughts</li>
        <li>Resume</li>
      </ul>
    </Nav>
  );
};

export default Header;

const Title = styled.div`
  text-align: center;
  h1 {
    font-weight: 500;
    margin: 0px;
  }
  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    margin: 0px;
  }
`;

const Nav = styled.nav`
  & ul {
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
  & li {
    display: none;
    font-size: 2rem;
    list-style-type: none;
  }
  @media only screen and (max-width: 480px) {
    h1{
      font-size: 2.5rem;
    }
`;
