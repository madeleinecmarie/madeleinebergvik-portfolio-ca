import React from "react";
import Head from "next/head";
import { Header } from "../components/header/Header";
import Cv from "../components/cv/Cv";
import Footer from "../components/footer/Footer";

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
