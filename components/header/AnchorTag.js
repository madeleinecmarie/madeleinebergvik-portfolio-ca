import styled from "styled-components";

const AnchorTag = styled.a`
  color: var(--black);
  font-weight: var(--semi-bold);
  font-size: var(--nav-text);

  &:hover {
    color: var(--green);
  }

  // &:active {
  //   color: var(--green);
  // }
`;

export default AnchorTag;
