import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import H2Heading from "../heading/H2Heading";
import media from "styled-media-query";

const IconStyle = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan("560px")`
  gap: 35px;
  `}
`;

const InfoStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 140px !important;

  ${media.lessThan("560px")`
  flex-wrap: wrap-reverse;
  gap: 80px;
  `}
`;

const ContactImg = styled.div`
  width: 50%;
`;

function InfoContact() {
  return (
    <InfoStyle>
      <ContactImg>
        <Image
          src="/images/girl.png"
          width="469px"
          height="436px"
          alt="Girl holdinga dog"
        ></Image>
      </ContactImg>
      <div>
        <H2Heading className="contact__headline">Get in touch.</H2Heading>
        <IconStyle>
          <Link
            href="https://www.linkedin.com/in/madeleine-bergvik-276b6b20a/"
            passHref
          >
            <a>
              <Image
                src="/images/linkedin.png"
                width="77px"
                height="75.69px"
                alt="LinkedIn icon"
              ></Image>
            </a>
          </Link>
          <Link href="mailto: madeleinebergvik@gmail.com" passHref>
            <a>
              <Image
                src="/images/gmail.png"
                width="89px"
                height="65.86px"
                alt="Gmail icon"
              ></Image>
            </a>
          </Link>
          <Link href="https://github.com/madeleinecmarie" passHref>
            <a>
              <Image
                src="/images/github2.png"
                width="81px"
                height="79.63px"
                alt="Github icon"
              ></Image>
            </a>
          </Link>
        </IconStyle>
      </div>
    </InfoStyle>
  );
}

export default InfoContact;
