import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ArtBanner = function () {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/artbanner/" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      durationFadeIn="2000"
      alt="Art banner."
    />
  );
};

export default ArtBanner;
