import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Technologies = () => (
  <StaticQuery
    query={graphql`
      query allimgQuery {
        source: allFile(filter: { absolutePath: { regex: "/devIcons/" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Container>
        <h2>Tech I Use</h2>
        <div>
          {data.source.edges.sort().map(({ node }, i) => (
            <Img
              key={i}
              fluid={node.childImageSharp.fluid}
              fadeIn={false}
              className="image"
              alt={node.name}
            />
          ))}
        </div>
      </Container>
    )}
  />
);

export default Technologies;

const Container = styled.div`
  background-color: var(--purple);
  text-align: center;
  h2 {
    color: var(--teal);
    margin: 0px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image {
    width: 100px;
    margin: 20px;
  }

  @media only screen and (max-width: 480px) {
    .image {
      width: 60px;
    }
  }
  @media only screen and (max-width: 770px) {
    background-color: #8300e1;
  }
`;
