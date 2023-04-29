import React, { useState } from 'react';
// import styles from './Demo.module.scss';
import containers from '../../../assets/containers-demo.gif';
import images from '../../../assets/images-demo.gif';
import containerMetrics from '../../../assets/containermetrics-demo.gif';
import k8sMetrics from '../../../assets/k8smetrics-demo.gif';
import logs from '../../../assets/logs-demo.gif';
import styles from '../Demo.module.scss';

const Mobile = (): JSX.Element => {
  const gifs = [
    { name: 'containers', url: containers },
    { name: 'images', url: images },
    { name: 'containerMetrics', url: containerMetrics },
    { name: 'k8sMetrics', url: k8sMetrics },
    { name: 'logs', url: logs },
  ];
  const [currGif, setGif] = useState(0);
  const handleClick = (direction: string) => {
    if (direction === 'right') {
      if (currGif === 4) {
        return setGif(0);
      } else {
        const change = currGif + 1;
        return setGif(change);
      }
    } else {
      if (currGif === 0) {
        return setGif(4);
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
          Go left
        </div>
        <div
          className={styles.gifMobileButtons}
          onClick={() => handleClick('right')}
        >
          Go right
        </div>
      </div>
    </div>
  );
};

export default Mobile;
