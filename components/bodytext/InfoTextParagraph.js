import styled from "styled-components";
import media from "styled-media-query";

const InfoTextParagraph = styled.p`
  margin-top: 60px;
  font-size: var(--body-text);
  font-weight: var(--regular);

  ${media.between("medium")`
  font-size: var(--media-body-text);
  `}
`;

export default InfoTextParagraph;
