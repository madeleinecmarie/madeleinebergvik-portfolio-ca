import styled from "styled-components";
import media from "styled-media-query";

const BodyText = styled.p`
  font-size: var(--body-text);
  font-weight: var(--regular);
  width: 85%;
  // FIXME: Remove important;
  margin-top: 20px !important;

  // TODO: Remove large as it is already covered by greater than medium.
  ${media.between("medium")`
    font-size: var(--media-body-text);
  `}
`;

export default BodyText;
