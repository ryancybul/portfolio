import { useStaticQuery, graphql } from "gatsby";

export const PortfolioPageQuery = () => {
  const portfolioData = useStaticQuery(graphql`
    {
      staceyWebsite: file(
        relativePath: { eq: "portfolio/staceyrozichportfolio.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            placeholder: BLURRED
            layout: CONSTRAINED
            formats: [AUTO]
          )
        }
      }
      reactClickyGame: file(
        relativePath: { eq: "portfolio/reactclickygame.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            placeholder: BLURRED
            layout: CONSTRAINED
            formats: [AUTO]
          )
        }
      }
      mtg: file(relativePath: { eq: "portfolio/mtg.png" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 100
            placeholder: BLURRED
            layout: CONSTRAINED
            formats: [AUTO]
          )
        }
      }
    }
  `);
  return portfolioData;
};
