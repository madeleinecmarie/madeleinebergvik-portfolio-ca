import React from "react";
import styled from "styled-components";
import H1Heading from "../heading/H1Heading";
import BodyText from "../bodytext/BodyText";

const ProjectsHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 80% !important;
  margin: auto !important;
  margin-top: 140px !important;
`;

function ProjectsHeadingDiv() {
  return (
    <ProjectsHeading>
      <H1Heading>My projects.</H1Heading>
      <BodyText>
        This is some of the projects I have done the last two years after
        starting the studies at Noroff.
      </BodyText>
    </ProjectsHeading>
  );
}

export default ProjectsHeadingDiv;
