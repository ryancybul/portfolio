import React from "react";
import SEO from "../components/seo";
import ArtBanner from "../components/ArtBanner";
import WavySection from "../components/WavySection";
import About from "../components/About";
import Buzzwords from "../components/Buzzwords";

const IndexPage = function () {
  return (
    <>
      <SEO title="Home" />
      <ArtBanner />
      <About />
      <WavySection />
      <Buzzwords />
    </>
  );
};

export default IndexPage;
