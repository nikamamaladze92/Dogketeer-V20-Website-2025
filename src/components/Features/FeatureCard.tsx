import React from 'react';
import styles from './Features.module.scss';
import { animated } from 'react-spring';

export interface FeatureCardProps {
  header: string;
  img: string;
  info: string;
  animation: unknown;
}

const FeatureCard = ({ animation, header, img, info }): JSX.Element =>{
  return (
    <animated.div className={styles.featureCard} style={animation}>
      <h3>{header}</h3>
      <img className={styles.img} src={img} alt="img" />
      <p>{info}</p>
    </animated.div>
  );
}

export default FeatureCard;
