// import { Link } from "gatsby"
import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Nav>
    <ul>
      <li>About</li>
      <li>Portfolio</li>
      <Title>
        <h1 className="title">&lt; RYAN CYBUL &gt;</h1>
        <h2>/*Web Developer*/</h2>
      </Title>
      <li>Thoughts</li>
      <li>Resume</li>
    </ul>
  </Nav>
);

export default Header;

const Title = styled.div`
  text-align: center;
  h1 {
    font-size: 3.5rem;
    font-weight: 500;
    margin: 0px;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0px;
  }
`;

const Nav = styled.nav`
  font-family: 'Futura';
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
`;
