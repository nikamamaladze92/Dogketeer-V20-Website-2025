import React, { useRef, useEffect, useState } from 'react';
import DemoToggle from './DemoToggle';
import DemoImage from './DemoImage';
import styles from './Demo.module.scss';

const Demo = (): JSX.Element => {
  const [currentGif, setCurrentGif] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        } else {
          setIsIntersecting(false);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = demoRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className={
        isLoaded && isIntersecting
          ? styles.demoDisplayLoaded
          : styles.demoDisplay
      }
      ref={demoRef}
    >
      <DemoToggle setCurrentGif={setCurrentGif} />
      <DemoImage currentGif={currentGif} />
    </div>
  );
};

export default Demo;
