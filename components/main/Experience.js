import React from "react";
import H3Heading from "../heading/H3Heading";
import Paragraph from "../bodytext/Paragraph";
import H2Heading from "../heading/H2Heading";
import styled from "styled-components";

const H2Style = styled.div`
  margin: auto !important;
  margin-top: 180px !important;
  width: 82%;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 82%;
  margin: auto !important;
  gap: 90px;
  margin-top: 80px !important;
`;

function Experience() {
  return (
    <div>
      <H2Style>
        <H2Heading>Work experience.</H2Heading>
      </H2Style>

      <Cards>
        <div>
          <H3Heading>Lee, Oslo Fashion Outlet</H3Heading>
          <Paragraph>Part-time</Paragraph>
          <Paragraph>January 2020 - present</Paragraph>
        </div>
        <div>
          <H3Heading>Glassperlen boligsameie</H3Heading>
          <Paragraph>Board member</Paragraph>
          <Paragraph>April 2018 - present</Paragraph>
        </div>
        <div>
          <H3Heading>Stockfleths AS</H3Heading>
          <Paragraph>Barista</Paragraph>
          <Paragraph>Former manager & assistant manager</Paragraph>
          <Paragraph>October 2015 - present</Paragraph>
        </div>
        <div>
          <H3Heading>Wayne’s Coffee</H3Heading>
          <Paragraph>Barista</Paragraph>
          <Paragraph>July 2015 - November 2015</Paragraph>
        </div>
        <div></div>
      </Cards>
    </div>
  );
}

export default Experience;
