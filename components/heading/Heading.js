import styled from "styled-components";
import media from "styled-media-query";
import H1Heading from "./H1Heading";
import H2Heading from "./H2Heading";
import H3Heading from "./H3Heading";

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

/**
 * @example
 *<div>
 *  <CustomHeading kind={h1}>Some text</CustomHeading>
 *</div>
 *
 */
export const CustomHeading = ({ kind, children }) => {
  switch (kind) {
    case "h1":
      return <H1Heading>{children}</H1Heading>;
    case "h2":
      return <H2Heading>{children}</H2Heading>;
    case "h3":
      return <H3Heading>{children}</H3Heading>;

    default:
      return <Heading>{children}</Heading>;
  }
};
