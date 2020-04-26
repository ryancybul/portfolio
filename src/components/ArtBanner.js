import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function ArtBanner() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/artbanner/" }) {
        childImageSharp {
          fluid(maxWidth: 3500, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      durationFadeIn="2000"
      alt="Art banner."
    />
  );
}

export default ArtBanner;
