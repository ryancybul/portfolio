import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Footer = function () {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/mountainTops/" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Wrapper>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="Mountains"
        className="mountains"
      />
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
        <p>Ryan Cybul @ 2018 - {new Date().getFullYear()}</p>
      </Content>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 0px;
  position: sticky;
  top: 100vh;
  width: 100%;
  img {
    display: block;
    width: 100%;
  }
  .mountains {
    margin-bottom: -5px;
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
