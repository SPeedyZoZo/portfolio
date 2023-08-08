// SparkTrail.js
import React, { useState, useEffect, useCallback } from 'react';
import styles from './SparkTrail.module.css'; // Update the path to your CSS file

const SparkTrail = () => {
  const [sparks, setSparks] = useState([]);

  const addSpark = useCallback((x, y) => {
    setSparks((prevSparks) => {
      const currentTime = Date.now();
      const newSparks = [{ x, y, createdAt: currentTime, faded: false }];
      return [...prevSparks, ...newSparks];
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      addSpark(clientX, clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [addSpark]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparks((prevSparks) => {
        const currentTime = Date.now();
        const filteredSparks = prevSparks.filter(
          (spark) =>
            !spark.faded && currentTime - spark.createdAt < 1000
        );
        return filteredSparks;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.sparkTrail}>
      {sparks.map((spark, index) => (
        <div
          key={index}
          className={`${styles.spark} ${spark.faded ? styles.faded : ''}`}
          style={{ left: spark.x, top: spark.y }}
        />
      ))}
    </div>
  );
};

export default SparkTrail;