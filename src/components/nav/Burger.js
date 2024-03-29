import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;

export const StyledBurger = styled.button`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;
  top: 0;
  left: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.17rem;
    background: var(--pink);
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
