import React from "react";
import Image from "next/image";
import styled from "styled-components";
import media from "styled-media-query";

const Coffee = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;

  ${media.lessThan("560px")`
  width: 80%;
  margin-top: 60px;
  `}
`;

function CoffeeImg() {
  return (
    <Coffee>
      <Image
        src="/images/coffee.png"
        width="410px"
        height="360px"
        alt="Spilling coffee mug"
      ></Image>
    </Coffee>
  );
}

export default CoffeeImg;
