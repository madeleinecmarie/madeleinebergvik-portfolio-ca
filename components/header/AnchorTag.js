import styled from "styled-components";

const AnchorTag = styled.a`
  color: ${(props) => (props.isActive ? "var(--light-green)" : "var(--black)")};
  font-weight: var(--semi-bold);
  font-size: var(--nav-text);

  &:hover {
    color: var(--green);
  }
`;

export default AnchorTag;
