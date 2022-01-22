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
    }
  `);
  return portfolioData;
};
