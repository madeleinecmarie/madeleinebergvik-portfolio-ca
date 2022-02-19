import React from "react";
import styled from "styled-components";
import H2Heading from "../heading/H2Heading";
import Icons from "../icons/Icons";
import media from "styled-media-query";

const SoftwareDiv = styled.div`
  margin-top: 90px !important;

  // TODO: This should be greater than. Mobile first principles
  ${media.lessThan("medium")`
  margin-top: 160px !important;
  `}

  ${media.lessThan("560px")`
  margin-top: 260px !important;
  `}

  ${media.lessThan("425px")`
  margin-top: 360px !important;
  `}

  ${media.lessThan("375px")`
  margin-top: 460px !important;
  `}
`;

function SoftwareSection() {
  return (
    <SoftwareDiv>
      <H2Heading>Software skills.</H2Heading>
      <div>
        <Icons />
      </div>
    </SoftwareDiv>
  );
}

export default SoftwareSection;
