import React, { useState, useEffect } from 'react';
import styles from './MouseGlow.module.css'; // Update the path to your CSS file

const MouseGlow = () => {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  let fadeTimeout;

  const handleMouseClick = (event) => {
    const { clientX, clientY } = event;
    setGlowPosition({ x: clientX, y: clientY });

    // Clear the previous fade timeout if it exists
    if (fadeTimeout) {
      clearTimeout(fadeTimeout);
    }

    setIsActive(true);

    // Set a new fade timeout for 1 second
    fadeTimeout = setTimeout(() => {
      setIsActive(false);
    }, 100);
  };

  useEffect(() => {
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('click', handleMouseClick);
      
      // Clear the fade timeout when the component unmounts
      if (fadeTimeout) {
        clearTimeout(fadeTimeout);
      }
    };
  }, []);

  return (
    <div
      className={`${styles.mouseGlow} ${isActive ? styles.active : ''}`}
      style={{ left: glowPosition.x, top: glowPosition.y }}
    />
  );
};

export default MouseGlow;
