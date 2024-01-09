import React from 'react';
import styles from './Demo.module.scss';
import containers from '../../assets/demos/containers-demo.gif';
import images from '../../assets/demos/images-demo-new.gif';
import containerMetrics from '../../assets/demos/containermetrics-demo.gif';
import k8sMetrics from '../../assets/demos/k8smetrics-demo.gif';
import logs from '../../assets/demos/logs-demo.gif';
import network from '../../assets/demos/networks-demo.gif';
import snapshots from '../../assets/demos/snapshots-demo.gif';

interface DemoGifProps {
  currentGif: number;
}

const DemoImage: React.FC<DemoGifProps> = ({ currentGif }): JSX.Element => {
  const gifs = [
    containers,
    network,
    images,
    containerMetrics,
    snapshots,
    k8sMetrics,
    logs,
  ];

  return (
    <div className={styles.gifContainer}>
      <img className={styles.gifs} src={gifs[currentGif]}></img>
    </div>
  );
};

export default DemoImage;
