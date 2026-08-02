// SparkTrail.js
import React, { useEffect, useRef, useState } from 'react';
import styles from './SparkTrail.module.css'; // Update the path to your CSS file
import { useSettings } from '../../context/SettingsContext';

const MAX_SPARKS = 200;

// Density is exposed to users as a friendlier 1 (sparse) - 10 (dense) scale;
// translate it into the actual minimum spawn-distance the effect uses internally.
const densityToMinDistance = (density) => 2 + (10 - density) * 2;

let sparkId = 0;

const SparkTrail = () => {
  const { settings } = useSettings();
  const [sparks, setSparks] = useState([]);
  const lastPos = useRef({ x: -Infinity, y: -Infinity });
  const frameRequested = useRef(false);
  const pendingPos = useRef(null);
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    if (!settings.trailEnabled) {
      setSparks([]);
      return undefined;
    }

    const handleMouseMove = (event) => {
      pendingPos.current = { x: event.clientX, y: event.clientY };

      if (frameRequested.current) return;
      frameRequested.current = true;

      requestAnimationFrame(() => {
        frameRequested.current = false;
        const pos = pendingPos.current;
        if (!pos) return;

        const minDistance = densityToMinDistance(settingsRef.current.trailDensity);
        const dx = pos.x - lastPos.current.x;
        const dy = pos.y - lastPos.current.y;
        if (dx * dx + dy * dy < minDistance * minDistance) return;

        lastPos.current = pos;
        sparkId += 1;
        const id = sparkId;

        setSparks((prevSparks) => {
          const next = [...prevSparks, { id, x: pos.x, y: pos.y }];
          return next.length > MAX_SPARKS ? next.slice(next.length - MAX_SPARKS) : next;
        });

        setTimeout(() => {
          setSparks((prevSparks) => prevSparks.filter((spark) => spark.id !== id));
        }, settingsRef.current.trailLength);
      });
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [settings.trailEnabled]);

  if (!settings.trailEnabled) return null;

  return (
    <div className={styles.sparkTrail}>
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className={styles.spark}
          style={{
            left: spark.x,
            top: spark.y,
            width: settings.trailSize,
            height: settings.trailSize,
            backgroundColor: settings.trailColor,
            animationDuration: `0.2s, ${settings.trailLength}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default SparkTrail;
