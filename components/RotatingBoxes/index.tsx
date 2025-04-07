// components/RotatingBoxes.tsx
import React from 'react';
import styles from './RotatingBoxes.module.css';

const RotatingBoxes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>P</div>
      <div className={styles.box}>P</div>
      <div className={styles.box}>P</div>
      <div className={styles.box}>L</div>
    </div>
  );
};

export default RotatingBoxes;