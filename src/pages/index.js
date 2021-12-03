import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArtBanner from "../components/ArtBanner";
import WavySection from "../components/WavySection";
import About from "../components/About";
import Buzzwords from "../components/Buzzwords";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ArtBanner />
    <About />
    <WavySection />
    <Buzzwords />
  </Layout>
);

export default IndexPage;
