import React from 'react';
import styles from './Features.module.scss'
interface FeatureCardProps {
  header: string,
  img: string,
  info: string
}

function FeatureCard(props: FeatureCardProps) {
  return (
    <div className={styles.featureCard}>
      <h5>{props.header}</h5>
      <img src={props.img} alt="img" />
      <p>{props.info}</p>
    </div>
  )
}

export default FeatureCard