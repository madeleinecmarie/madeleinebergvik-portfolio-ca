import React from "react";
import { Header } from "../components/header/Header";
import Footer from "../components/footer/Footer";
import InfoContact from "../components/info/InfoContact";
import InfoAbout from "../components/info/InfoAbout";

function InfoIndex() {
  return (
    <>
      <Header />
      <InfoAbout />
      <InfoContact />
      <Footer />
    </>
  );
}

export default InfoIndex;
