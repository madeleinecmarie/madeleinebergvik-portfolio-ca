import styled from "styled-components";
import media from "styled-media-query";

const Heading = styled.div`
  font-size: var(--hero-heading);
  color: var(--green);
  font-weight: var(--bold);
  display: flex;
  justify-content: center;
  padding-top: 200px !important;
  height: 135px;

  ${media.lessThan("medium")`
  padding-top: 20px !important;
  font-size: var(--media-hero-heading-small);
  height: 95px;
`}

  ${media.between("medium", "large")`
  font-size: var(--media-hero-heading);
  padding-top: 140px !important;
  height: 105px;
  `}

  ${media.lessThan("375px")`
  font-size: var(--media-hero-heading-smallest);
  height: 70px;
  `}
`;

export default Heading;
