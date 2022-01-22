import { useStaticQuery, graphql } from "gatsby";

export const InfoPageQuery = () => {
  const infoData = useStaticQuery(graphql`
    {
      headshot: file(relativePath: { eq: "info/headshot.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            placeholder: NONE
            layout: CONSTRAINED
            formats: [AUTO, WEBP, JPG]
          )
        }
      }
    }
  `);
  return infoData;
};
