import React from "react";
import "../styles/style.css";
import Nav from "./nav/Nav";
import Footer from "./Footer";

const Layout = function ({ children }) {
  return (
    <div className="wrapper">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
