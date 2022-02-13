import React from "react";
import Heading from "../heading/Heading";
import HeroParagraph from "../bodytext/HeroParagraph";
import styled from "styled-components";
import media from "styled-media-query";

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeroImg = styled.div`
  width: 90%;
  height: 600px;
  background-image: url("/images/heroimage.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 60px !important;

  ${media.lessThan("medium")`
  margin: auto !important;
  margin-top: 80px !important;
  width: 50%;
`}

  ${media.lessThan("560px")`
  width: 65%;
`}
`;

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 750px;
  margin-top: 120px !important;

  ${media.lessThan("medium")`
  flex-direction: column;
  height: 800px;
`}

  ${media.between("medium", "large")`
  height: 580px;
  flex-direction: row;
  `}

  ${media.lessThan("425px")`
  height: 700px;
  `}

  ${media.lessThan("375px")`
  height: 650px;
  `}
`;

function HeroSection() {
  return (
    <Hero>
      <Text>
        <Heading>Portfolio.</Heading>
        <HeroParagraph>By Madeleine Bergvik</HeroParagraph>
      </Text>
      <HeroImg />
    </Hero>
  );
}

export default HeroSection;
