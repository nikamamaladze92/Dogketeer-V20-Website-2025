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
    'View, run, remove, or search for images with ease.',
    'Observe metrics related to containers as well as your CPU.',
    'Hit the toggle button to view Kubernetes cluster metrics for nodes and kubelets.',
    'Access process logs right in Docketeer or save them for later.',
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
          Images
        </div>
        <div className={styles.toggle} onClick={() => handleClick(2)}>
          Container Metrics
        </div>
        <div className={styles.toggle} onClick={() => handleClick(3)}>
          Cluster Metrics
        </div>
        <div className={styles.toggle} onClick={() => handleClick(4)}>
          Process Logs
        </div>
      </div>
      <p>{descriptions[currentGif]}</p>
    </div>
  );
};

export default DemoToggle;
