import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { PortfolioPageQuery } from "../queries/portfolioPageQuery";

const Portfolio = function () {
  const data = PortfolioPageQuery();

  return (
    <PageWrapper>
      <ProjectWrapper className="boxShadow">
        <ProjectImage>
          <a href="https://www.staceyrozich.com" target="blank">
            <GatsbyImage
              image={data.staceyWebsite.childImageSharp.gatsbyImageData}
              alt="Stacey Rozich"
            />
          </a>
        </ProjectImage>
        <h2 className="title hover">
          <a href="https://www.staceyrozich.com" target="blank">
            Stacey Rozich
          </a>
        </h2>
        <a
          href="https://github.com/ryancybul/stacey-rozich"
          target="blank"
          className="githubLink"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" className="icon" />
        </a>
        <p>
          A website I built for the artist Stacey Rozich. It's a Jamstack site
          built in GatsbyJS, WordPress and is hosted on AWS.
        </p>
      </ProjectWrapper>
      <ProjectWrapper className="boxShadow">
        <ProjectImage>
          <a
            href="https://629f5242c3dc5a062934ec7c--marvelous-macaron-26e896.netlify.app/"
            target="blank"
          >
            <GatsbyImage
              image={data.reactClickyGame.childImageSharp.gatsbyImageData}
              alt="Clicky game"
            />
          </a>
        </ProjectImage>
        <h2 className="title hover">
          <a
            href="https://629f5242c3dc5a062934ec7c--marvelous-macaron-26e896.netlify.app/"
            target="blank"
          >
            Clicky Game
          </a>
        </h2>
        <a
          href="https://github.com/ryancybul/clicky-game"
          target="blank"
          className="githubLink"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" className="icon" />
        </a>
        <p>This app is a memory game built with React.</p>
      </ProjectWrapper>
    </PageWrapper>
  );
};

export default Portfolio;

const PageWrapper = styled.div`
  justify-items: center;
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectWrapper = styled.div`
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-template-rows: auto;
  grid-template-areas:
    "image image"
    "title icon"
    "desc desc";
  grid-area: image image;
  margin: 35px;
  max-width: 750px;
  padding: 10px;
  .githubLink {
    align-self: end;
    grid-area: icon;
    justify-self: center;
  }
  h2 {
    a {
      color: var(--black);
    }
    grid-area: title;
    font-size: 1.5rem;
    margin: 15px 0px 0px 0px;
  }
  .icon {
    color: var(--pink);
    width: 25px;
    height: auto;
    margin: 5px;
  }
  p {
    grid-area: desc;
    margin: 0px;
  }
`;

const ProjectImage = styled.div`
  border-radius: 20px;
  grid-area: image;
  img {
    border-radius: 20px;
  }
  /* max-width: 575px; */
  :hover {
    cursor: pointer;
  }
`;
