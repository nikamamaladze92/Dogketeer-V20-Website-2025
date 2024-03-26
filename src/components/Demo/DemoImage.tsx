import React from 'react';
import styles from './Demo.module.scss';
import containers from '../../assets/demos/containerTab-new.gif';
import images1 from '../../assets/demos/imageTab1-new.gif';
import images2 from '../../assets/demos/imageTab2-new.gif';
import images3 from '../../assets/demos/imageTab3-new.gif';
import metrics from '../../assets/demos/metricTab-new.gif';
import k8 from '../../assets/demos/k8Tab-new.gif';
import others from '../../assets/demos/hamburgerTab-new.gif';

interface DemoGifProps {
  currentGif: number;
}

const DemoImage: React.FC<DemoGifProps> = ({ currentGif }): JSX.Element => {
  const gifs = [
    containers,
    images1,
    images2,
    images3,
    metrics,
    k8,
    others,
  ];

  return (
    <div className={styles.gifContainer}>
      <img className={styles.gifs} src={gifs[currentGif]}></img>
    </div>
  );
};

export default DemoImage;
