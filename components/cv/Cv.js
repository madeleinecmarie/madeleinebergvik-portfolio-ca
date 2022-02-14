import React from "react";
import H3Heading from "../heading/H3Heading";
import Paragraph from "../bodytext/Paragraph";
import styled from "styled-components";

const CvStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 82%;
  margin: auto !important;
  margin-top: 160px !important;
  gap: 90px;
`;

function Cv() {
  return (
    <CvStyle>
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
      <div>
        <H3Heading>BikBok</H3Heading>
        <Paragraph>Sales</Paragraph>
        <Paragraph>August 2014 - August 2015</Paragraph>
      </div>
    </CvStyle>
  );
}

export default Cv;
