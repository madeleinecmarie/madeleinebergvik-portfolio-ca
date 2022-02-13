import React from "react";
import InfoTextParagraph from "./InfoTextParagraph";
import styled from "styled-components";

const InfoDiv = styled.div`
  height: 450px;
`;

function InfoText() {
  return (
    <InfoDiv>
      <InfoTextParagraph>
        Hi, I’m Madeleine and I’m a front end developer with an eye for design.
        Currently on the last semester of the two year Higher Proffessional
        Degree at Noroff in Oslo.
      </InfoTextParagraph>

      <InfoTextParagraph>
        I care a lot about using my skills for a positive impact and are over
        the average passioned about good userbility and high quality.
      </InfoTextParagraph>

      <InfoTextParagraph>Let me introduce myself.</InfoTextParagraph>
    </InfoDiv>
  );
}

export default InfoText;
