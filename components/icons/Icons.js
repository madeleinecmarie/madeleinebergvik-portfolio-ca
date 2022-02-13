import React from "react";
import Image from "next/image";
import styled from "styled-components";
import media from "styled-media-query";

const IconsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;

  ${media.between("medium", "large")`
  gap: 40px;
  `}

  ${media.lessThan("medium")`
  gap: 40px;
  `}

  ${media.lessThan("425px")`
  width: 70%;
  gap: 60px;
`}
`;

const KeyDiv = styled.div`
  width: 20%;
  margin-top: 60px !important;
`;

const Icons = () => {
  const iconsLogo = [
    {
      src: "/images/html.png",
      title: "HTML",
    },
    {
      src: "/images/css.png",
      title: "CSS",
    },
    {
      src: "/images/javascript.png",
      title: "JavaScript",
    },
    {
      src: "/images/react.png",
      title: "React",
    },
    {
      src: "/images/sass.png",
      title: "SASS",
    },
    {
      src: "/images/github.png",
      title: "Github",
    },
    {
      src: "/images/bootstrap.png",
      title: "Bootstrap",
    },
    {
      src: "/images/wordpress.png",
      title: "Wordpress",
    },
    {
      src: "/images/adobeXd.png",
      title: "Adobe Xd",
    },
    {
      src: "/images/figma.png",
      title: "Figma",
    },
  ];

  return (
    <IconsDiv className="icons__container">
      {iconsLogo.map((img) => (
        <KeyDiv key={img.title}>
          {/* <Image src={img.src} alt={img.title} height="110px" width="100%" /> */}
          <img src={img.src} alt={img.title}></img>
        </KeyDiv>
      ))}
    </IconsDiv>
  );
};

export default Icons;
