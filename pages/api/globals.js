import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
:root {
    * {
        padding: 0;
        margin: 0;
    }

    /* Font name */
    --main-font: "Poppins", sans-serif;
  
    /* Font sizes */
    --h1-headline: 67.34px;
    --h2-headline: 50.52px;
    --h3-headline: 37.9px;
    --body-text: 28.43px;
    --btn-text: 24px;
  
    /* font weight */
    --regular: 400;
    --semi-bold: 600;
    --bold: 700;
  
    /* Colors */
    --green: rgba(79, 179, 164, 1);
    --black: rgba(10, 9, 8, 1);
    --white: rgba(255, 255, 255, 1);
  
    --pink: rgba(232, 164, 163, 0.4);
    --brown: rgba(163, 87, 42, 0.4);
    --light-green: rgba(0, 89, 36, 0.4);
    --yellow: rgba(252, 243, 164, 0.5);
    --greenblue: rgba(79, 179, 164, 0.5);
    --darkblue: rgba(44, 48, 146, 1);
  
    /* Spacing */
    --small-space: 14px;
    --medium-space: 40px;
    --large-space: 72px;
    --extralarge-space: 250px;
    --largest-space: 365px;
  
    /* Radius */
    --radius: 20px;
  
    /* Shadow */
    --shadow-1: 0 2px 4px 0 rgb(0 0 0 / 0.2);
  
    /* Animations */
    /* I will do some animation but not sure which one yet.  */
  }


  html {
    background-color: var(--white);
    font-family: var(--main-font);
}


${media.greaterThan("huge")`
--font-size-base: 18px;
--size-xxs: 6px;
--size-xs: 8px;
--size-sm: 13px;
--size: 20px;
--size-md: 30px;
--size-lg: 40px;
--size-xl: 58px;
--size-xxl: 92px;
--size-huge: 130px;
--size-jumbo: 150px;
`}

`;

export default GlobalStyle;
