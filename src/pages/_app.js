import React from 'react';
import SvgAnimation from '../components/Animations/SvgAnimation';
import MouseGlow from '../components/MouseGlow/MouseGlow';
import Theme from '../styles/theme';
import SparkTrail from '../components/SparkTrail/SparkTrail';
import Settings from '../components/Settings/Settings';
import { SettingsProvider } from '../context/SettingsContext';

export default function App({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <div className="cursor-hide">
        <Theme>
          <SvgAnimation />
          <MouseGlow />
          <SparkTrail />
          <Settings />
          <Component {...pageProps} />
        </Theme>
      </div>
    </SettingsProvider>
  );
}
