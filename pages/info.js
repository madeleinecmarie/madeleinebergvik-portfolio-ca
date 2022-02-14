import React from "react";
import Head from "next/head";
import Body from "../components/body/Body";
import { Header } from "../components/header/Header";
import Footer from "../components/footer/Footer";
import InfoContact from "../components/info/InfoContact";
import InfoAbout from "../components/info/InfoAbout";

function InfoIndex() {
  return (
    <>
      <Head>
        <title>Madeleine Bergvik Portfolio</title>
        <meta
          name="description"
          content="On this page you can find info about me and where you can contact me. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Header />
        <InfoAbout />
        <InfoContact />
        <Footer />
      </Body>
    </>
  );
}

export default InfoIndex;
