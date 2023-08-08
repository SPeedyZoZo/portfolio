import React, { useEffect } from 'react';
import styles from './SvgAnimation.module.css'; // Update the path to your CSS file

const SvgAnimation = () => {
  useEffect(() => {
    const removeAnimation = setTimeout(() => {
      const animationContainer = document.querySelector(`.${styles.animationContainer}`);
      if (animationContainer) {
        animationContainer.remove();
      }
    }, 7000);

    return () => clearTimeout(removeAnimation);
  }, []);

  return (
    <div className={styles.animationContainer}>
      <svg
        id="eafg1FSWbI91"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 1080"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        className={styles.svgAnimation}
      >
        {/* CDATA style block */}
        <style>
          {`
            #eafg1FSWbI92_to {animation: eafg1FSWbI92_to__to 3000ms linear 1 normal forwards}@keyframes eafg1FSWbI92_to__to { 0% {transform: translate(960px,1330px);animation-timing-function: cubic-bezier(0,0,0.58,1)} 16.666667% {transform: translate(960px,290px);animation-timing-function: cubic-bezier(0.47,0,0.745,0.715)} 26.666667% {transform: translate(960px,540px)} 100% {transform: translate(960px,540px)}} #eafg1FSWbI92_ts {animation: eafg1FSWbI92_ts__ts 3000ms linear 1 normal forwards}@keyframes eafg1FSWbI92_ts__ts { 0% {transform: scale(1,1)} 83.333333% {transform: scale(1,1);animation-timing-function: cubic-bezier(0.42,0,1,1)} 90% {transform: scale(0.2,0.2);animation-timing-function: cubic-bezier(0.42,0,1,1)} 100% {transform: scale(50,50)}}
          `}
        </style>

        {/* SVG animation */}
        <g id="eafg1FSWbI92_to" transform="translate(960,1330)">
          <g id="eafg1FSWbI92_ts" transform="scale(1,1)">
            <ellipse rx="100" ry="100" transform="translate(0,0)" fill="#0f1624" stroke-width="0" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SvgAnimation;
