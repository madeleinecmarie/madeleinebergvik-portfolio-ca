import styled from "styled-components";
import media from "styled-media-query";

const H1Heading = styled.div`
  font-size: var(--h1-headline);
  color: var(--black);
  font-weight: var(--semi-bold);

  ${media.between("medium", "large")`
  font-size: var(--media-h1);
  `}

  ${media.lessThan("medium")`
  font-size: var(--media-h1-small);
  `}
`;

export default H1Heading;
