import React from 'react';
import FeatureCard from './FeatureCard';
import styles from './Features.module.scss';
import containers from '../../assets/features/containers.svg';
import network from '../../assets/features/network.svg'
import images from '../../assets/features/images.svg';
import kubernetes from '../../assets/features/kubernetes.svg';
import logs from '../../assets/features/logs.svg';
import metrics from '../../assets/features/metrics.svg';
import cookie from '../../assets/features/cookie.svg';
import security from '../../assets/features/security.svg';
import prune from '../../assets/features/prune.svg';

import { useInView } from 'react-intersection-observer';
import { useSprings, config } from 'react-spring';

const Features = (): JSX.Element => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const animations = useSprings(
    9,
    [0, 150, 300, 450, 600, 750, 900, 1050, 1200].map((delay) => ({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(50px)',
      config: config.slow,
      delay: inView ? delay : 0,
    }))
  );

  const featureData = [
    {
      header: 'Container Management',
      img: containers,
      info: 'Create, start, stop, and delete Docker containers all in one place',
    },
    {
      header: 'Network Management',
      img: network,
      info: ' Advanced network support and intuitive visualization for seamless container networking.',
    },
    {
      header: 'Image Management',
      img: images,
      info: 'Easily view, run, remove, and search for Docker images',
    },
    {
      header: 'Container Metrics',
      img: metrics,
      info: 'Access metrics related to containers in a dashboard with rich visualizations',
    },
    {
      header: 'Cluster Metrics',
      img: kubernetes,
      info: 'Access metrics related to Kubernetes clusters with just the toggle of a button',
    },
    {
      header: 'Detailed Process Logs',
      img: logs,
      info: 'View and download process logs related to containers',
    },
    {
      header: 'Secure Authentication',
      img: security,
      info: "Maintain trust in Docketeer's encryption and hashing methods",
    },
    {
      header: 'Sessions',
      img: cookie,
      info: "Stay logged in thanks to Docketeer's implementation of sessions and cookies",
    },
    {
      header: 'System Prune / Network Prune',
      img: prune,
      info: 'Clear up unused images or networks to ensure optimized performance',
    },
  ];

  return (
    <div className={styles.featuresContainer} ref={ref}>
      <div className={styles.features}>
        <h1>Features</h1>
        <a
          className={styles.article}
          href="https://medium.com/@jaenixlee/docketeer-xii-now-ready-for-launch-d06e8f26cd0f"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read about us on Medium!
        </a>
        <div className={styles.featureCards}>
          {featureData.map((item, index) => (
            <FeatureCard
              key={index}
              header={item.header}
              img={item.img}
              info={item.info}
              animation={animations[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
