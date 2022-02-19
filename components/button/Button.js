import styled from "styled-components";
import Link from "next/link";
import media from "styled-media-query";

const BtnDiv = styled.div`
  width: 82%;
  margin: auto;
  margin-top: 90px;
  transition: var(--transformation);

  ${media.lessThan("425px")`
  margin-top: 5px;
}
`}
`;

const Button = styled.a`
  height: 90px;
  width: 214px;
  background: var(--pink-btn);
  color: var(--black);
  font-size: var(--btn-text);
  font-weight: var(--semi-bold);
  border-radius: var(--radius);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow);

  &:hover {
    transform: var(--skew-animation);
    opacity: 0.92;
  }
`;

// TODO: remove this does nothing

const RedirectToPage = ({ href = "/cv", handleOnClickCB }) => (
  <BtnDiv>
    <Link href={href} passHref>
      <Button onClick={handleOnClickCB}>See full CV</Button>
    </Link>
  </BtnDiv>
);

export default RedirectToPage;
