import React from 'react';
import linkedinLogo from '../../assets/LinkedIn-Logos/LI-In-Bug.png';
import githubLogo from '../../assets/github-mark/github-mark.png';
import styles from './Team.module.scss';

interface othersProps {
  name: string;
  linkedin: string;
  github: string;
}

const AllOthers: React.FC<othersProps> = ({ name, linkedin, github }) => {
  return (
    <div>
      <p className={styles.person}>
        {name}{' '}
        <a href={linkedin}>
          <img className={styles.linkedIn} src={linkedinLogo} />
        </a>
        <a href={github}>
          <img className={styles.github} src={githubLogo} />
        </a>
      </p>
    </div>
  );
};

export default AllOthers;
