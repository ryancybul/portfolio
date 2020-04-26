import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import './layout.css';
import ArtBanner from './ArtBanner';
import Header from './header';
import Section from './Section';
import Footer from './Footer';
import About from './About';
import Buzzwords from './Buzzwords'
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="wrapper">
        <Header />
        <ArtBanner />
        <About />
        <Section />
        <Buzzwords />
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
