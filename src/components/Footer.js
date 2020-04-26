import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import mountainTops from '../images/mountainTops.png';

function Footer() {
  return (
    <Wrapper>
      <img src={mountainTops} alt="mountains" />
      <Content>
        <div>
          <a href="https://github.com/ryancybul" target="blank">
            <FontAwesomeIcon icon={faGithub} size="3x" className="icon" />
          </a>
          <a href="mailto: ryan.cybul@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="3x" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/ryancybul/" target="blank">
            <FontAwesomeIcon icon={faLinkedinIn} size="3x" className="icon" />
          </a>
        </div>
        <p>Ryan Cybul @ 2018 - 2020</p>
      </Content>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  padding: 0px;
  img {
    display: block;
    width: 100%;
  }
`;
const Content = styled.div`
  background-color: var(--teal);
  text-align: center;
  width: 100%;
  padding: 20px 0;
  p {
    margin: 10px;
    padding: 5px;
  }
  .icon {
    color: var(--pink);
    width: 75px;
  }
`;
