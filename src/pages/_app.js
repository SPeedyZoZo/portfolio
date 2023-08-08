import React, { useEffect } from 'react';
import SvgAnimation from '../components/Animations/SvgAnimation';
import MouseGlow from '../components/MouseGlow/MouseGlow';
import Theme from '../styles/theme';
import SparkTrail from '../components/SparkTrail/SparkTrail';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.title = "Zaid's Porfolio"; // Set your desired title here
  }, []);

  return (
    <div className="cursor-hide">
      <SvgAnimation />
      <MouseGlow />
      <SparkTrail />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </div>
  );
}
