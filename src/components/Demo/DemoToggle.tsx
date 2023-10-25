import React from 'react';
import styles from './Demo.module.scss';

interface DemoToggleProps {
  setCurrentGif: (gifIndex: number) => void;
  currentGif: number;
}

const DemoToggle: React.FC<DemoToggleProps> = ({
  setCurrentGif,
  currentGif,
}): JSX.Element => {
  const descriptions = [
    'Start, stop, or remove your containers at the click of a button.',
    'Easily create or remove user-defined networks and attach or detach containers to them.',
    'View, run, or remove images with ease.',
    'Observe metrics related to containers as well as your CPU.',
    'View Kubernetes cluster metrics for nodes and kubelets.',
    'Access and search process logs right in Docketeer or save them for later.',
  ];

  const handleClick = (gifIndex: number) => {
    setCurrentGif(gifIndex);
  };

  return (
    <div className={styles.mainContainer}>
      <p className={styles.action}>Click to see a demo of each feature!</p>
      <div className={styles.toggleContainer}>
        <div className={styles.toggle} onClick={() => handleClick(0)}>
          Containers
        </div>
        <div className={styles.toggle} onClick={() => handleClick(1)}>
          Networks
        </div>
        <div className={styles.toggle} onClick={() => handleClick(2)}>
          Images
        </div>
        <div className={styles.toggle} onClick={() => handleClick(3)}>
          Container Metrics
        </div>
        <div className={styles.toggle} onClick={() => handleClick(4)}>
          Cluster Metrics
        </div>
        <div className={styles.toggle} onClick={() => handleClick(5)}>
          Process Logs
        </div>
      </div>
      <p className={styles.descriptions}>{descriptions[currentGif]}</p>
    </div>
  );
};

export default DemoToggle;
