import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Portfolio from '../components/Portfolio';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Portfolio />
  </Layout>
);

export default IndexPage;
