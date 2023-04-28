import React from 'react';
import styles from './Features.module.scss';
import { animated } from 'react-spring';

export interface FeatureCardProps {
  header: string;
  img: string;
  info: string;
  animation: any;
}

function FeatureCard(props: FeatureCardProps) {
  return (
    <animated.div className={styles.featureCard} style={props.animation}>
      <h3>{props.header}</h3>
      <img src={props.img} alt="img" />
      <p>{props.info}</p>
    </animated.div>
  );
}

export default FeatureCard;
