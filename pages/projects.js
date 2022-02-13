import Head from "next/head";
import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import Main from "../components/main/Main";
import Projects from "../components/projects/ProjectsCards";
import ProjectsHeadingDiv from "../components/projects/ProjectsHeading";

export default function ProjectsIndex() {
  return (
    <>
      <Head>
        <title>Madeleine Bergvik Portfolio</title>
        <meta name="description" content="Hi! And welcome to my portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body>
        <Header />
        <Main>
          <ProjectsHeadingDiv />
          <Projects />
        </Main>
        <Footer />
      </Body>
    </>
  );
}
