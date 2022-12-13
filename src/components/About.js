import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const About = function () {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/profile/" }) {
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
        alt="Profile pic"
        className="profile"
      />
      <p>
        I am a web developer based out of Asheville, NC. I’m{" "}
        {new Date().getFullYear() - new Date(1985)} years old and have been
        programming since 2018. I primarily use React, Typescript, JavaScript,
        Node, CSS, and HTML. I am seeking to contribute a proven track record of
        commitment, team collaboration, and creativity in a full-time web
        development position.
      </p>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    font-size: 1.5rem;
    max-width: 1000px;
    padding-top: 20px;
    margin: 20px;
  }
  .profile {
    width: 480px;
    box-shadow: 0px 12px var(--teal);
  }

  @media only screen and (max-width: 480px) {
    .profile {
      width: 250px;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
