import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Technologies from './Technologies';

function WavySection() {
  const data = useStaticQuery(graphql`
    query {
      topWave: file(relativePath: { regex: "/waveTop/" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bottomWave: file(relativePath: { regex: "/waveBottom/" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Img
        fluid={data.topWave.childImageSharp.fluid}
        fadeIn={false}
        alt="Top wave"
      />
      <Technologies />
      <Img
        fluid={data.bottomWave.childImageSharp.fluid}
        fadeIn={false}
        alt="Bottom wave"
      />
    </Wrapper>
  );
}

export default WavySection;

const Wrapper = styled.section`
  img {
    display: block;
    width: 100%;
  }
`;
