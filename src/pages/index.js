import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArtBanner from '../components/artBanner';
import WavySection from '../components/WavySection';
import About from '../components/About';
import Buzzwords from '../components/Buzzwords';
import Portfolio from '../components/Portfolio';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ArtBanner />
    <About />
    <Portfolio />
    <WavySection />
    <Buzzwords />
  </Layout>
);

export default IndexPage;
