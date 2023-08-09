import React, { useState, useEffect } from 'react';
import styles from './MouseGlow.module.css'; // Update the path to your CSS file

const MouseGlow = () => {
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  let fadeTimeout;

  const handleMouseOrTouch = (event) => {
    // Determine the event type based on the event properties
    const eventType = event.type === 'click' ? 'mouse' : 'touch';

    // Get the appropriate event coordinates based on the event type
    let clientX, clientY;
    if (eventType === 'mouse') {
      clientX = event.clientX;
      clientY = event.clientY;
    } else if (eventType === 'touch') {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }

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
    document.addEventListener('click', handleMouseOrTouch);
    document.addEventListener('touchstart', handleMouseOrTouch);

    return () => {
      document.removeEventListener('click', handleMouseOrTouch);
      document.removeEventListener('touchstart', handleMouseOrTouch);

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
