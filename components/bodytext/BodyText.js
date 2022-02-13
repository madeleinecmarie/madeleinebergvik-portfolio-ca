import styled from "styled-components";
import media from "styled-media-query";

const BodyText = styled.p`
  font-size: var(--body-text);
  font-weight: var(--regular);
  width: 85%;
  margin-top: 20px !important;

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    font-size: var(--media-body-text);
  `}
`;

export default BodyText;
