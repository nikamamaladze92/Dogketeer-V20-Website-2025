import React from 'react';
import styles from './Home.module.scss';
import docketeer from '../../assets/docketeer.png';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.home}>
        <div className={styles.left}>
          <div className={styles.description}>
            <h1>Introducing Docketeer XII</h1>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              quam maiores illo officia dolores, nulla quaerat? Laboriosam quis
              cupiditate modi nihil officiis odit. Quaerat vel illo sequi ipsa,
              id dolores.
            </h3>
          </div>
        </div>
        <div className={styles.right}>
          <img
            width='300px'
            height='auto'
            src={docketeer}
            alt='docketeer_img'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
