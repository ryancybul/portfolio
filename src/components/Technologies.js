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
        <h3>Tech I Use</h3>
        <div>
          {data.source.edges.map(({ node }, i) => (
            <Img
              key={i}
              fluid={node.childImageSharp.fluid}
              fadeIn={false}
              className="image"
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
  h3 {
    color: var(--teal);
    font-size: 35px;
    margin: 0px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image {
    width: 125px;
    margin: 20px;
  }

  @media only screen and (max-width: 480px) {
    h3{
      font-size: 2.25rem;
    }
    .image {
      width: 75px;
    }
`;
