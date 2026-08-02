import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: ${props => props.theme.cursorHidden ? 'none' : 'auto'};

  }
  h1,h2,h3,h5,h6 {
    font-family: ${props => props.theme.fonts.title};
  }

  h4,button {
    font-family: ${props => props.theme.fonts.body};
  }

  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  /* Components turn off the default :focus outline for a cleaner mouse-click
     appearance; restore a visible indicator for keyboard/assistive-tech users. */
  :focus-visible {
    outline: 2px solid #13ADC7 !important;
    outline-offset: 3px !important;
    border-radius: 2px;
  }

`;

export default GlobalStyles;