import styled from "styled-components";
import media from "styled-media-query";

const H3Heading = styled.div`
  font-size: var(--h3-headline);
  color: var(--black);
  font-weight: var(--semi-bold);

  ${media.between("medium", "large")`
  font-size: var(--media-h3);
  `}

  ${media.lessThan("425px")`
  font-size: var(--media-h3-small);
  `}
`;

export default H3Heading;
