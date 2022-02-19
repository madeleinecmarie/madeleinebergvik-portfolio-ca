import React from "react";
import H3Heading from "../heading/H3Heading";
import Paragraph from "../bodytext/Paragraph";
import H2Heading from "../heading/H2Heading";
import styled from "styled-components";

const H2Style = styled.div`
  margin: 180px auto auto;
  width: 82%;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 82%;
  margin: auto;
  gap: 90px;
  margin-top: 80px;
`;

function Experience() {
  const experiences = [
    {
      heading: "Lee, Oslo Fashion Outlet",
      subHeading: "Part",
      content: ["January 2020 - present"],
    },
    {
      heading: "Glassperlen boligsameie",
      subHeading: "Board",
      content: ["April 2018 - present"],
    },
    {
      heading: "Stockfleths AS",
      subHeading: "Barista",
      content: ["Former manager & assistant manager", "October 2015 - present"],
    },
    {
      heading: "Wayne’s Coffee",
      subHeading: "Barista",
      content: ["July 2015 - November 2015"],
    },
  ];

  return (
    <div>
      <H2Style>
        <H2Heading>Work experience.</H2Heading>
      </H2Style>

      <Cards>
        {experiences.map(({ heading, subHeading, content }) => (
          <div key={heading}>
            <H3Heading>{heading}</H3Heading>
            <Paragraph>{subHeading}</Paragraph>

            {content.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
          </div>
        ))}
      </Cards>
    </div>
  );
}

export default Experience;
