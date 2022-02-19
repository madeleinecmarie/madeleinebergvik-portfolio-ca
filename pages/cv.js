import React from "react";
import Head from "next/head";
import { Header } from "../components/header/Header";
import Cv from "../components/cv/Cv";
import Footer from "../components/footer/Footer";

// NOTE: This shouldn't be called index as their is only one index per directory which is your home page
function CvIndex() {
  return (
    <div>
      <Head>
        <title>Madeleine Bergvik Portfolio</title>
        <meta
          name="description"
          content="Here you can find all my work experience through the years."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Cv />
      <Footer />
    </div>
  );
}

export default CvIndex;
