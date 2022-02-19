// FIXME: This file is located in the wrong place
import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
:root {

    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
    }
    
    /* Font name */
    --main-font: "Poppins", sans-serif;
  
    /* Font sizes */
    --h1-headline: 67.34px;
    --h2-headline: 50.52px;
    --h3-headline: 37.9px;
    --body-text: 26px;
    --btn-text: 24px;
    --nav-text: 20px;
    --hero-heading: 110px;
    --hero-text: 25px;


    // Font sizes media queries
    --media-body-text: 22px;
    --media-hero-heading: 80px;
    --media-h1: 55px;
    --media-h2: 45px;
    --media-h3: 35px;
    --media-btn-text: 20px;
    --media-h1-small: 50px;
    --media-h2-small: 40px;
    --media-h3-small: 30px;
    --media-hero-heading-small: 80px;
    --media-hero-heading-smallest: 60px;
    --media-hero-paragraph-smallest: 22px;
  
    /* font weight */
    --regular: 400;
    --semi-bold: 600;
    --bold: 700;
  
    /* Colors */
    // --bgd: rgba(246, 246, 246, 1);
    --green: rgba(79, 179, 164, 1);
    --black: rgba(10, 9, 8, 1);
    --white: rgba(255, 255, 255, 1);
    --pink-btn: rgba(217, 165, 182, 1);
  
    --pink: rgba(217, 165, 182, 0.4);
    --brown: rgba(163, 87, 42, 0.4);
    --light-green: rgba(0, 89, 36, 0.4);
    --yellow: rgba(252, 243, 164, 0.5);
    --greenblue: rgba(79, 179, 164, 0.5);
    --darkblue: rgba(44, 48, 146, 1);
  
    /* Radius */
    --radius: 20px;
  
    /* Shadow */
    --shadow: 0 2px 4px 0 rgb(0 0 0 / 0.2);
  
    /* Animations */
    --transformation: transform .4s cubic-bezier(.165, .84, .44, 1);
    --skew-animation: skew(.72deg, .72deg);
  }

  html {
    background-color: var(--white);
    font-family: var(--main-font);
    
}

// Nav

.active {
    color: var(--green);
  }

// Index

.logo:hover {
  transform: rotate(180deg);
}

// Projects page

.projects__heading {
  margin-top: 30px !important;
}

.projects__bodytext {
  margin-bottom: 90px !important;
}

// Info page

.contact__headline {
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 60px !important;
}


${media.lessThan("560px")`

.copyright__smallScreen {
  margin-top: 10px !important;
}
`}
`;

export default GlobalStyle;
