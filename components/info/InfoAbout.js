import React from "react";
import H1Heading from "../heading/H1Heading";
import Image from "next/image";
import styled from "styled-components";
import InfoTextParagraph from "../bodytext/InfoTextParagraph";
import media from "styled-media-query";

const Info = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan("560px")`
  flex-direction: column;
  `}
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto !important;
  margin-top: 140px !important;
  width: 45%;

  ${media.lessThan("560px")`
  width: 80%;
  `}
`;

const AboutImg = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 40%;
  margin-top: 130px !important;
`;

function InfoAbout() {
  return (
    <Info>
      <AboutSection>
        <H1Heading>About me.</H1Heading>

        <div>
          <InfoTextParagraph>
            Hi there! I am Madeleine Bergvik, and this is my portfolio. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Viverra ut nisl,
            lobortis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Viverra ut nisl, lobortis ornare.
          </InfoTextParagraph>
          <InfoTextParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ut
            nisl, lobortis ornare. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </InfoTextParagraph>
        </div>
      </AboutSection>
      <AboutImg>
        <Image
          src="/images/girlanddog.png"
          width="325px"
          height="617px"
          alt="Girl holdinga dog"
        ></Image>
      </AboutImg>
    </Info>
  );
}

export default InfoAbout;
