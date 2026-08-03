import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  :root {
    --bg-primary: #0F1624;
    --bg-secondary: #131b2c;
    --bg-card: #0F1624;
    --bg-card-alt: #0E131F;
    --bg-hover: #212D45;
    --stat-box-bg: #212D45;

    --text-primary: #FFFFFF;
    --text-secondary: rgba(255, 255, 255, 0.75);
    --text-tertiary: rgba(255, 255, 255, 0.5);
    --text-heading-start: #FFFFFF;
    --text-heading-end: rgba(255, 255, 255, 0.66);
    --project-title-color: #9cc9e3;

    --border-color: rgba(255, 255, 255, 0.1);
    --border-color-strong: rgba(255, 255, 255, 0.33);
    --toggle-off-bg: rgba(255, 255, 255, 0.15);

    --shadow-color: rgba(80, 78, 78, 0.5);
    --shadow-color-hover: rgba(128, 128, 128, 0.5);

    --btn-hover-bg: #fff;
    --btn-hover-text: #0f1624;
  }

  :root[data-theme="light"] {
    --bg-primary: #F3F5F9;
    --bg-secondary: #FFFFFF;
    --bg-card: #FFFFFF;
    --bg-card-alt: #EDF0F5;
    --bg-hover: #E4E9F1;
    --stat-box-bg: #FFFFFF;

    --text-primary: #0F1624;
    --text-secondary: rgba(15, 22, 36, 0.75);
    --text-tertiary: rgba(15, 22, 36, 0.5);
    --text-heading-start: #0F1624;
    --text-heading-end: rgba(15, 22, 36, 0.66);
    --project-title-color: #1f6f96;

    --border-color: rgba(15, 22, 36, 0.1);
    --border-color-strong: rgba(15, 22, 36, 0.25);
    --toggle-off-bg: rgba(15, 22, 36, 0.15);

    --shadow-color: rgba(15, 22, 36, 0.12);
    --shadow-color-hover: rgba(15, 22, 36, 0.18);

    --btn-hover-bg: #0F1624;
    --btn-hover-text: #FFFFFF;
  }

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
    background: var(--bg-primary);
    color: var(--text-primary);
    cursor: ${props => props.theme.cursorHidden ? 'none' : 'auto'};
    transition: background 0.3s ease, color 0.3s ease;

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
