import styled from "styled-components";
import Link from "next/link";
import media from "styled-media-query";

const BtnDiv = styled.div`
  width: 82%;
  margin: auto !important;
  margin-top: 90px !important;
  transition: var(--transformation);

  ${media.lessThan("425px")`
  margin-top: 5px !important;
}
`}
`;

const Button = styled.div`
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

const handleClick = (e) => {
  console.log("Redirected");
  console.log(e);
};

const RedirectToPage = () => (
  <BtnDiv>
    <Link href="/cv" passHref>
      <a>
        <Button onClick={handleClick}>See full CV</Button>
      </a>
    </Link>
  </BtnDiv>
);

export default RedirectToPage;
