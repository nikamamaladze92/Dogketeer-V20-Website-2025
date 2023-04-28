import React from 'react';
import styles from './Home.module.scss';
import docketeer from '../../assets/docketeer.png';
import docker from "../../assets/dockerlogo.png"
import kuber from "../../assets/kuberneteslogo.png"
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

function Home(): JSX.Element {
  const [ref, inView] = useInView();
  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateX(0) translateY(0) scale(1)'
      : 'translateX(-50%) translateY(-50%) scale(0)',
  });
  

  return (
    <animated.div style={spring} ref={ref}>
      <div className={styles.homeContainer}>
        <div className={styles.home}>
          <div className={styles.left}>
            <div className={styles.description}>
              <h1>Introducing Docketeer XII</h1>
              <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quam maiores illo officia dolores, nulla quaerat? Laboriosam quis cupiditate modi nihil officiis odit. Quaerat vel illo sequi ipsa, id dolores.</h3>
            </div>
          </div>
          <div className={styles.right}>
            <img width='300px' height='auto' src={docker} alt="docketeer_img" />
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Home;

