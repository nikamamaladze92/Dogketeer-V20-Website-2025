import React, { useRef, useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import styles from './Features.module.scss';
import containers from '../../assets/features/containers.svg';
import images from '../../assets/features/images.svg';
import kubernetes from '../../assets/features/kubernetes.svg';
import logs from '../../assets/features/logs.svg';
import metrics from '../../assets/features/metrics.svg';
import cookie from '../../assets/features/cookie.svg';
import security from '../../assets/features/security.svg';
import prune from '../../assets/features/prune.svg';

function Features() {
<<<<<<< HEAD
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
=======

>>>>>>> 03201b5ea5b2943c81e8d4131026f09eab5b0785

  return (
    <div className={styles.featuresContainer}>
      <div className={styles.features}>
        <h1>Features</h1>
<<<<<<< HEAD
        <a className={styles.article} href="http://google.com">
          Read about us on Medium!
        </a>
        <div className={styles.featureCards}>
          <FeatureCard
            header={'Container Management'}
            img={containers}
            info={
              'Create, start, stop, and delete Docker containers all in one place'
            }
          />
          <FeatureCard
            header={'Image Management'}
            img={images}
            info={'Easily view, run, remove, and search for Docker images'}
          />
          <FeatureCard
            header={'Container Metrics'}
            img={metrics}
            info={
              'Access metrics related to containers in a dashboard with rich visualizations'
            }
          />
          <FeatureCard
            header={'Cluster Metrics'}
            img={kubernetes}
            info={
              'Access metrics related to Kubernetes clusters with just the toggle of a button'
            }
          />
          <FeatureCard
            header={'Detailed Process Logs'}
            img={logs}
            info={'View and download process logs related to containers'}
          />
          <FeatureCard
            header={'Secure Authentication'}
            img={security}
            info={
              "Maintain trust in Docketeer's encryption and hashing methods"
            }
          />
          <FeatureCard
            header={'Sessions'}
            img={cookie}
            info={
              "Stay logged in thanks to Docketeer's implementation of sessions and cookies"
            }
          />
          <FeatureCard
            header={'System Prune'}
            img={prune}
            info={'Clear up unused images to ensure optimized performance'}
          />
=======
        <a className={styles.article} href="http://google.com" target="_blank">Read about us on Medium!</a>
        <div className={styles.featureCards}>
        
          <FeatureCard header={"Container Management"} img={containers} info={"Create, start, stop, and delete Docker containers all in one place"} />
          <FeatureCard header={"Image Management"} img={images} info={"Easily view, run, remove, and search for Docker images"} />
          <FeatureCard header={"Container Metrics"} img={metrics} info={"Access metrics related to containers in a dashboard with rich visualizations"} />
          <FeatureCard header={"Cluster Metrics"} img={kubernetes} info={"Access metrics related to Kubernetes clusters with just the toggle of a button"} />
          
          <FeatureCard header={"Detailed Process Logs"} img={logs} info={"View and download process logs related to containers"} />
          <FeatureCard header={"Secure Authentication"} img={security} info={"Maintain trust in Docketeer's encryption and hashing methods"} />
          <FeatureCard header={"Sessions"} img={cookie} info={"Stay logged in thanks to Docketeer's implementation of sessions and cookies"} />
          <FeatureCard header={"System Prune"} img={prune} info={"Clear up unused images to ensure optimized performance"} />
        
>>>>>>> 03201b5ea5b2943c81e8d4131026f09eab5b0785
        </div>
      </div>
    </div>
  );
}

export default Features;
