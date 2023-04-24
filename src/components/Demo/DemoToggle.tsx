import React from 'react';
import styles from './Demo.module.scss';

interface DemoToggleProps {
  setCurrentGif: (gifIndex: number) => void;
}

const DemoToggle: React.FC<DemoToggleProps> = ({ setCurrentGif }): JSX.Element => {

  const handleClick = (gifIndex: number) => {
    setCurrentGif(gifIndex);
  }
  return (
    <div className={styles.mainContainer}>
      <p>Click to see Docketeer in action!</p>
      <div className={styles.toggleContainer}>
        <div className={styles.toggle} onClick={() => handleClick(0)} >Containers</div>
        <div className={styles.toggle} onClick={() => handleClick(1)}>Images</div>
        <div className={styles.toggle} onClick={() => handleClick(2)}>Container Metrics</div>
        <div className={styles.toggle} onClick={() => handleClick(3)}>Cluster Metrics</div>
        <div className={styles.toggle} onClick={() => handleClick(4)}>Process Logs</div>
      </div>
      <p>description</p>
    </div>
  );
};

export default DemoToggle;