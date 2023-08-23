import React from 'react';
import styles from './Demo.module.scss';
import containers from '../../assets/containers-demo.gif';
import images from '../../assets/images-demo.gif';
import containerMetrics from '../../assets/metrics-demo.gif';
import k8sMetrics from '../../assets/k8smetrics-demo.gif';
import logs from '../../assets/logs-demo.gif';
import network from '../../assets/networks-demo.gif';

interface DemoGifProps {
  currentGif: number;
}

const DemoImage: React.FC<DemoGifProps> = ({ currentGif }): JSX.Element => {
  const gifs = [containers, network, images, containerMetrics, k8sMetrics, logs];

  return (
    <div className={styles.gifContainer}>
      <img className={styles.gifs} src={gifs[currentGif]}></img>
    </div>
  );
};

export default DemoImage;
