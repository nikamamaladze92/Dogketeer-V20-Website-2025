import React, { useState } from 'react';
// import styles from './Demo.module.scss';
import containers from '../../../assets/demos/containerTab-new.gif';
import images1 from '../../../assets/demos/imageTab1-new.gif';
import images2 from '../../../assets/demos/imageTab2-new.gif';
import images3 from '../../../assets/demos/imageTab3-new.gif';
import metrics from '../../../assets/demos/metricTab-new.gif';
import k8 from '../../../assets/demos/k8Tab-new.gif';
import others from '../../../assets/demos/hamburgerTab-new.gif';
import configuration from '../../../assets/demos/configuration.gif';


import styles from '../Demo.module.scss';

const Mobile = (): JSX.Element => {
  const gifs = [
    { name: 'Containers', url: containers },
    { name: 'Images', url: images1 },
    { name: 'Data Visualization', url: images2 },
    { name: 'Time-Series', url: images3 },
    { name: 'Metrics', url: metrics },
    { name: 'Cluster Metrics', url: k8 },
    { name: 'Configuration', url: configuration },
    { name: 'Others', url: others },
  ];

  const descriptions = [
    'Start, stop, or remove your containers at the click of a button.',
    'View, run, or remove images with ease.',
    'Visualize your package vulnerability information.',
    'Save Scan, Rescan, Compare your scans with a click of a button.',
    'Monitor your container metrics.',
    'View Kubernetes cluster metrics for nodes and kubelets.',
    'Dynamically alter Prometheus targets to customize displayed metrics',
    'Many more options to monitor your metrics.',
  ];

  const [currGif, setGif] = useState(0);
  const handleClick = (direction: string) => {
    if (direction === 'right') {
      if (currGif === 5) {
        return setGif(0);
      } else {
        const change = currGif + 1;
        return setGif(change);
      }
    } else {
      if (currGif === 0) {
        return setGif(5);
      } else {
        const change = currGif - 1;
        return setGif(change);
      }
    }
  };

  return (
    <div>
      <img className={styles.gifMobile} src={gifs[currGif].url}></img>
      <div>{gifs[currGif].name}</div>
      <div className={styles.gifMobileButtonsBox}>
        <div
          className={styles.gifMobileButtons}
          onClick={() => handleClick('')}
        >
          &larr;
        </div>
        <div
          className={styles.gifMobileButtons}
          onClick={() => handleClick('right')}
        >
          &rarr;
        </div>
      </div>
      <p className={styles.mobileDesc}>{descriptions[currGif]}</p>
    </div>
  );
};

export default Mobile;
