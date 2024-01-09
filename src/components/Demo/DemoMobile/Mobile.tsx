import React, { useState } from 'react';
// import styles from './Demo.module.scss';
import containers from '../../../assets/demos/containers-demo.gif';
import images from '../../../assets/demos/images-demo-new.gif';
import containerMetrics from '../../../assets/demos/containermetrics-demo.gif';
import k8sMetrics from '../../../assets/demos/k8smetrics-demo.gif';
import logs from '../../../assets/demos/logs-demo.gif';
import networks from '../../../assets/demos/networks-demo.gif';
import snapshots from '../../../assets/demos/snapshots-demo.gif';

import styles from '../Demo.module.scss';

const Mobile = (): JSX.Element => {
  const gifs = [
    { name: 'Containers', url: containers },
    { name: 'Networks', url: networks },
    { name: 'Images', url: images },
    { name: 'Container Metrics', url: containerMetrics },
    { name: 'Snapshots', url: snapshots },
    { name: 'Cluster Metrics', url: k8sMetrics },
    { name: 'Process Logs', url: logs },
  ];

  const descriptions = [
    'Start, stop, or remove your containers at the click of a button.',
    'Easily create or remove user-defined networks and attach or detach containers to them.',
    'View, run, or remove images with ease.',
    'Observe metrics related to containers as well as your CPU.',
    'View and compare previously captured container metrics.',
    'View Kubernetes cluster metrics for nodes and kubelets.',
    'Access process logs right in Docketeer or save them for later.',
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
