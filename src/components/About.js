import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

function About() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/profile/" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Profile pic"
        className="profile"
      />
      <p>
        I am a web developer based out of Asheville, NC. I’m 35 years old and
        have been making websites since 2018. I primarily use HTML, CSS and
        JavaScript and focus on the frameworks React.js, Gatsby, and Wordpress.
      </p>
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  p {
    font-size: 2.25rem;
    font-family: 'Futura';
    width: 75%;
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
      font-size: 1.75rem;
    }
  }
`;
