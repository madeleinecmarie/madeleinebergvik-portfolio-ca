import styled from "styled-components";
import media from "styled-media-query";

const NavUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 33%;

  ${media.lessThan("560px")`
  width: 40%;
  `}

  ${media.lessThan("415px")`
  width: 60%;
  `}

  ${media.lessThan("425px")`
  width: 50%;
  `}

  ${media.lessThan("320px")`
  width: 60%;
  `}
`;

export default NavUl;
