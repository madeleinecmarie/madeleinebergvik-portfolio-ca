import styled from "styled-components";
import media from "styled-media-query";

const Nav = styled.nav`
  overflow: hidden;
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 40px !important;
  padding-top: 30px !important;
  padding-bottom: 30px !important;
  background-color: var(--white);

  ${media.between("medium", "large")`
    width: 95%;
  `}

  ${media.lessThan("medium")`
  width: 95%;
  `}


  ${media.lessThan("560px")`
  width: 90%;
  `}

  ${media.lessThan("415px")`
  width: 90%;
  `}
`;

export default Nav;
