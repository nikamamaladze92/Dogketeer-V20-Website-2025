import React from 'react';
import linkedinLogo from '../../assets/LinkedIn-Logos/LI-In-Bug.png';
import githubLogo from '../../assets/github-mark/github-mark.png';
import styles from './Team.module.scss';

interface xiiProps {
    img: string;
    name: string;
    linkedin: string;
    github: string;
}

const XII: React.FC<xiiProps> = ({img, name, linkedin, github}) => {

  return (
    <div>
      <img className={styles.osp4Pic} src={img}/>
      <p>{name}</p>
      <a href={linkedin}><img className={styles.linkedIn} src={linkedinLogo}/></a> <a href={github}><img className={styles.github} src={githubLogo}/></a>
    </div>
  )
}

export default XII;