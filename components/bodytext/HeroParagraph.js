import styled from "styled-components";
import media from "styled-media-query";

const HeroParagraph = styled.div`
  display: flex;
  justify-content: center;
  font-size: var(--hero-text);
  font-weight: var(--semi-bold);
  margin-top: 10px;

  ${media.lessThan("375px")`
  font-size: var(--media-hero-paragraph-smallest);
  `}
`;

export default HeroParagraph;
