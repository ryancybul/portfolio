import React from "react";
import { Link } from "gatsby";
import { bool } from "prop-types";
import styled from "styled-components";

const BurgerMenu = ({ open, setOpen }) => (
  <StyledMenu open={open}>
    <div>
      <Link className="hover" to="/portfolio/" onClick={() => setOpen(!open)}>
        Portfolio
      </Link>
    </div>
    <div>
      <Link className="hover" to="/info/" onClick={() => setOpen(!open)}>
        Info
      </Link>
    </div>
  </StyledMenu>
);

BurgerMenu.propTypes = {
  open: bool.isRequired,
};

export default BurgerMenu;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(52, 52, 52, 0.975);
  text-align: center;
  padding-top: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 10;
  width: 100vw;
  height: 100vh;
  a:first-child {
    margin-top: 3rem;
  }
  div {
    margin: 0.25rem;
  }
  a {
    font-size: 1.75rem;
    &[aria-current="page"] {
      color: var(--pink);
      border-bottom: 2px solid var(--pink);
    }
  }
`;
