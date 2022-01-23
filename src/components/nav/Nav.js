// import { Link } from "gatsby"
import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";

const Nav = function () {
  const [open, setOpen] = useState(false);

  // To do: Set burger menu to close based on window dimensions.

  return (
    <NavWrapper>
      <div className="burgerWrapper">
        <Burger open={open} setOpen={setOpen} />
        <BurgerMenu open={open} setOpen={setOpen} />
      </div>
      <Link
        to="/portfolio/"
        activeClassName="active"
        className="hover navButton"
      >
        Portfolio
      </Link>
      <Title className="title">
        <Link to="/">
          <h1> &lt; RYAN CYBUL &gt;</h1>
          <h2>/*Web Developer*/</h2>
        </Link>
      </Title>
      <Link to="/info/" activeClassName="active" className="hover navButton">
        Info
      </Link>
    </NavWrapper>
  );
};

export default Nav;

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

const NavWrapper = styled.nav`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 405px 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  width: 100%;

  a {
    color: black;
    font-size: 1.5rem;
    text-decoration: none;
  }

  .active {
    color: var(--pink);
    text-decoration: underline;
  }

  .title {
    color: var(--pink);
  }

  @media only screen and (max-width: 550px) {
    h1 {
      font-size: 2.25rem;
    }
  }
  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 1.65rem;
    }
    h2 {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 650px) {
    .burgerWrapper {
      display: none;
      border: 10px solid red;
    }
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    .navButton {
      display: none;
    }
  }
`;
