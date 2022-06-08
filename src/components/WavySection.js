import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Technologies from "./Technologies";

const WavySection = function () {
  const data = useStaticQuery(graphql`
    {
      topWave: file(relativePath: { regex: "/waveTop/" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
        }
      }
      bottomWave: file(relativePath: { regex: "/waveBottom/" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Wrapper>
      <GatsbyImage
        image={data.topWave.childImageSharp.gatsbyImageData}
        alt="Top wave"
        className="topWave"
      />
      <Technologies />
      <GatsbyImage
        image={data.bottomWave.childImageSharp.gatsbyImageData}
        alt="Bottom wave"
        className="bottomWave"
      />
    </Wrapper>
  );
};

export default WavySection;

const Wrapper = styled.section`
  img {
    display: block;
    margin: 0;
    width: 100%;
  }

  .topWave {
    margin-bottom: -5px;
  }

  .bottomWave {
    margin-top: -5px;
  }
`;
