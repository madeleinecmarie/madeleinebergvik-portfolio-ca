import Head from "next/head";
import styled from "styled-components";
import Body from "../components/body/Body";
import { Header } from "../components/header/Header";
import Main from "../components/main/Main";
import TextSection from "../components/textsection/TextSection";
import SoftwareSection from "../components/softwaresection/SoftwareSection";
import Skills from "../components/skills/Skills";
import ExperienceCards from "../components/experience/Experience";
import RedirectToPage from "../components/button/Button";
import HeroSection from "../components/hero/HeroSection";
import CoffeeImg from "../components/coffeeimg/CoffeeImg";
import Footer from "../components/footer/Footer";

const InfoSection = styled.div`
  display: flex;
  justify-content: center;
  margin: auto !important;
  width: 80%;
`;

const Software = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  // FIXME: Remove important. What are you trying to overwrite?
  margin: auto !important;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Madeleine Bergvik Portfolio</title>
        <meta
          name="description"
          content="Hi! I'm Madeleine Bergvik, and welcome to my portfolio. This is a place where you can get to know me. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body>
        <Header />
        <Main>
          <HeroSection />

          <InfoSection>
            <TextSection />
          </InfoSection>

          <Software>
            <SoftwareSection />
          </Software>

          <Skills />
          <ExperienceCards />
          <RedirectToPage />
          <CoffeeImg />
        </Main>
        <Footer />
      </Body>
    </>
  );
}
