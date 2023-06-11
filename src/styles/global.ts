import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  hr {
    opacity: 0.3;
    cursor: pointer;
  }

  html, body, #__next {
    height: 100%;
  }


  body {
    background-color: #f6f6f9;
  }

  .ReactModal__Overlay {
    z-index:9999;
  }

    .ReactModal__Content{
      @media screen and (max-width: 1024px) {
        width: 80% !important;
      }

      @media screen and (max-width: 580px) {
        width: 90% !important;
      }
    }

  }
`;

export default GlobalStyles;
