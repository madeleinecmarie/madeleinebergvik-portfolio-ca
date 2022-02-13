import styled from "styled-components";
import media from "styled-media-query";

const H2Heading = styled.div`
  font-size: var(--h2-headline);
  color: var(--black);
  font-weight: var(--semi-bold);
  margin-bottom: 60px !important;

  ${media.between("medium", "large")`
  font-size: var(--media-h2);
  `}

  ${media.lessThan("medium")`
  font-size: var(--media-h2-small);
  `}
`;

export default H2Heading;
