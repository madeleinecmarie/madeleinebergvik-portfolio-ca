import React from "react";
import H2Heading from "../heading/H2Heading";
import BodyText from "../bodytext/BodyText";
import styled from "styled-components";
import media from "styled-media-query";

const SkillsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: auto !important;
  margin-top: 200px !important;
`;

const PersonalSkills = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${media.between("medium", "large")`
  gap: 15px;
  `}

  ${media.lessThan("medium")`
  gap: 20px;
  flex-direction: column;
  `}
`;

function Skills() {
  return (
    <SkillsDiv>
      <H2Heading>Personal skills.</H2Heading>
      <PersonalSkills>
        <BodyText>Teamwork</BodyText>
        <BodyText>Structured</BodyText>
        <BodyText>Creativity</BodyText>
        <BodyText>Leadership</BodyText>
        <BodyText>Adaptibility</BodyText>
      </PersonalSkills>
    </SkillsDiv>
  );
}

export default Skills;
