import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';
import { useSettings } from '../context/SettingsContext';

const Theme = ({ children }) => {
  const { settings } = useSettings();
  const mergedTheme = { ...theme, cursorHidden: settings.trailEnabled };

  return (
    <ThemeProvider theme={mergedTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;