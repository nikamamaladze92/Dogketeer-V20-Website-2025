import React, { useState } from 'react';
import DemoToggle from './DemoToggle';
import DemoImage from './DemoImage';
import styles from './Demo.module.scss';


const Demo = (): JSX.Element => {
  const [currentGif, setCurrentGif] = useState(0);

  return (
    <div className={styles.demoDisplay}>
      <DemoToggle setCurrentGif={setCurrentGif} />
      <DemoImage currentGif={currentGif} />
    </div>
  );
};

export default Demo;