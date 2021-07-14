import React from 'react';
import styled from 'styled-components';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const QUERY = graphql`
  {
    allWordpressPost {
      edges {
        node {
          acf {
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
          title
          content
          slug
          tags {
            name
          }
        }
      }
    }
  }
`;

const Portfolio = () => (
  <StaticQuery
    query={QUERY}
    render={data => (
      <Wrapper>
        <h3>Projects</h3>
        <CardWrapper>
          {data.allWordpressPost.edges.map(post => (
            <Card>
              <Img
                fluid={post.node.acf.image.localFile.childImageSharp.fluid}
              />
              <h1>{post.node.title}</h1>
              <Link to={`/${post.node.slug}`}>Blog post</Link>
              <ul>
                {post.node.tags.map(tag => (
                  <Tag>
                    <a>{tag.name}</a>
                  </Tag>
                ))}
              </ul>
            </Card>
          ))}
        </CardWrapper>
      </Wrapper>
    )}
  />
);

export default Portfolio;

const Wrapper = styled.div`
  text-align: center;
  color: var(--pink);
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  text-align: center;
  box-shadow: 0px 13px 68px 0px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--gray);
  border-radius: 20px;
  margin: 7px;
  width: 200px;
  height: 300px;

  h1 {
    font-size: 16px;
  }

  ul {
    background-color: var(--purple);
    display: inline-block;
    list-style: none;
  }
`;

const Tag = styled.li`
  li {
    color: var(--teal);
    margin: 5px;
    padding: 0px 5px;
    transform: skew(20deg);
  }
  li a {
    transform: skew(-20deg);
  }
`;
