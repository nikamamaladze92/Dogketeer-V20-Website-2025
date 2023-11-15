import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styles from './Home.module.scss';
import docker from '../../assets/docketeerlogo.png';
import { Link } from 'react-scroll';

const Home = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const homeRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.5 },
    );

    const currentRef = homeRef.current;

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
        isLoaded && isIntersecting ? styles.homeLoaded : styles.homeDisplay
      }
      ref={homeRef}>
      <div className={styles.left}>
        <div className={styles.description}>
          <h1 className={styles.mainTitle}>Introducing Docketeer XVI</h1>
          <p>
            Docketeer is a user-friendly application with an intuitive interface
            for container management, with visualization tools for your
            containers and Kubernetes clusters. The Docker Desktop Extension has
            container and Kubernetes metrics dashboards for health monitoring,
            an intuitive process logs page to search through your container
            logs, pagination on the containers home page, and an alpha release
            of the configurations tab where you can configure endpoints for
            Prometheus to scrape your Kubernetes clusters. The latest update
            elaborated on the Docker Desktop Extension release of Docketeer,
            bringing the capability to capture snapshots of your container
            metrics to compare previously saved health metrics.
          </p>
        </div>
        <div className={styles.explore}>
          <Link
            to='features'
            smooth={true}
            hashSpy={true}
            spy={true}
            duration={600}>
            Start Exploring
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <img width='300px' height='auto' src={docker} alt='docketeer_img' />
      </div>
    </div>
  );
};

export default Home;
