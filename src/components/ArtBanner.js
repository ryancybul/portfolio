import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const ArtBanner = function () {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { regex: "/artbanner/" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            placeholder: BLURRED
            layout: FULL_WIDTH
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      alt="Art banner."
    />
  );
};

export default ArtBanner;
