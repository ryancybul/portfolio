import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import Header from './header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
