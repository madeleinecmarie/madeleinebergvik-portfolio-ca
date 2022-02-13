import React from "react";
import H1Heading from "../heading/H1Heading";
import InfoText from "../bodytext/InfoText";

function TextSection() {
  return (
    <div>
      <H1Heading>A little info.</H1Heading>
      <div>
        <InfoText />
      </div>
    </div>
  );
}

export default TextSection;
