import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { InfoPageQuery } from "../queries/infoPageQuery";

const Info = function () {
  const data = InfoPageQuery();

  return (
    <PageWrapper>
      <InfoWrapper className="boxShadow">
        <GatsbyImage
          image={data.headshot.childImageSharp.gatsbyImageData}
          alt="Image"
        />
        <div>
          <h2>Hi, I'm Ryan Cybul</h2>
          <p>
            I'm a Junior Web Developer and complex problem solver with 3+ years
            of programming experience. I am seeking to contribute a proven track
            record of commitment, team collaboration and creativity in a full
            time web development position. I've always had an interest in
            programming haven taken many elective programming classes in
            highschool and in college. Recently I took my education a step
            further by attending web development bootcamp at Northwestern
            Universty in Chicago. In the bootcamp I've got a good foundation in
            HTML, CSS, JavaScript, ReactJS and Node.
          </p>
          <h3>Contact:</h3>
          <ul>
            <li>
              <a className="hover" href="mailto: ryan.cybul@gmail.com">
                ryan.cybul@gmail.com
              </a>
            </li>
            <li>
              <a
                className="hover"
                href="https://www.linkedin.com/in/ryancybul/"
                target="blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="hover"
                href="https://github.com/ryancybul"
                target="blank"
              >
                GitHub
              </a>
            </li>
          </ul>
          <p>(Resume availiable upon request.)</p>
        </div>
      </InfoWrapper>
    </PageWrapper>
  );
};

export default Info;

const PageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  background-color: white;
  border-radius: 25px;
  display: grid;
  max-width: 1200px;
  margin: 50px;
  padding: 25px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  a {
    color: black;
  }
  h2 {
    margin: 0px;
  }
  h3 {
    margin: 0px;
    font-size: 1.75rem;
  }
  li {
    padding: 5px;
  }
  .icon {
    color: var(--pink);
    width: 75px;
  }
  .gatsby-image-wrapper {
    max-width: 600px;
    min-width: 250px;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    margin: 50px 25px;
  }
`;
