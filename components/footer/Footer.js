import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import InfoTextParagraph from "../bodytext/InfoTextParagraph";
import media from "styled-media-query";

const FooterStyle = styled.div`
  background: var(--green);
  height: 330px;
  margin-top: 80px !important;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  ${media.lessThan("560px")`
  flex-direction: column;
  height: 500px;
  `}

  ${media.lessThan("425px")`
  height: 450px;
  `}
`;

const Ul = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto !important;
  justify-self: left;
  width: 30%;

  ${media.between("medium", "large")`
  width: 20%;
  `}

  ${media.lessThan("560px")`
  width: 80%;
  
  `}
`;

const Li = styled.div`
  font-size: var(--body-text);
`;

const Anchor = styled.div`
  color: var(--black);
  margin-bottom: 10px !important;
  font-weight: var(--semi-bold);
  font-size: var(--btn-text);
`;

const FooterImg = styled.div`
  margin-top: 40px !important;

  ${media.between("medium", "large")`
  width: 60%;
  `}

  ${media.lessThan("medium")`
  width: 60%;
  `}

  ${media.lessThan("560px")`
  width: 70%;
  
  `}
`;

function Footer() {
  return (
    <FooterStyle>
      <Ul>
        <Li>
          <Link
            href="https://www.linkedin.com/in/madeleine-bergvik-276b6b20a/"
            passHref
          >
            <a>
              <Anchor>LinkedIn</Anchor>
            </a>
          </Link>
        </Li>
        <Li>
          <Link href="mailto: madeleinebergvik@gmail.com" passHref>
            <a>
              <Anchor>Gmail</Anchor>
            </a>
          </Link>
        </Li>
        <Li>
          <Link href="https://github.com/madeleinecmarie" passHref>
            <a>
              <Anchor>Github</Anchor>
            </a>
          </Link>
        </Li>
        <InfoTextParagraph className="copyright__smallScreen">
          MB © 2022
        </InfoTextParagraph>
      </Ul>

      <FooterImg>
        <Image
          alt=""
          width="592"
          height="210.43"
          src="/images/footerimg.png"
        ></Image>
      </FooterImg>
    </FooterStyle>
  );
}

export default Footer;
