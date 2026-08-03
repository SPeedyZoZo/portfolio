import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';
import { useSettings } from '../context/SettingsContext';

const Theme = ({ children }) => {
  const { settings } = useSettings();
  const mergedTheme = { ...theme, cursorHidden: settings.trailEnabled };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', settings.theme === 'light' ? '#F3F5F9' : '#0F1624');
    }
  }, [settings.theme]);

  return (
    <ThemeProvider theme={mergedTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
