import React from "react";
import styled from "styled-components";

const AboutText = styled.div`
  font-size: var(--body-text);
  // FIXME: Why important?
  margin-top: 30px;
  width: 100%;
`;

function About() {
  return (
    <>
      <AboutText>
        Hi there! I am Madeleine Bergvik. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Viverra ut nisl, lobortis ornare. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Viverra ut nisl,
        lobortis ornare. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </AboutText>
      <AboutText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ut
        nisl, lobortis ornare. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </AboutText>
    </>
  );
}

export default About;
