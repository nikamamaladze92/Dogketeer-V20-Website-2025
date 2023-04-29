import React from 'react';
// import styles from './Demo.module.scss';
import containers from '../../../assets/containers-demo.gif';
import images from '../../../assets/images-demo.gif';
import containerMetrics from '../../../assets/containermetrics-demo.gif';
import k8sMetrics from '../../../assets/k8smetrics-demo.gif';
import logs from '../../../assets/logs-demo.gif';
import styles from '../Demo.module.scss';

const Mobile = (): JSX.Element => {
  const gifs = [containers, images, containerMetrics, k8sMetrics, logs];

  return (
    <div>
      <img className={styles.gifMobile} src={gifs[0]}></img>
    </div>
  );
};

export default Mobile;
