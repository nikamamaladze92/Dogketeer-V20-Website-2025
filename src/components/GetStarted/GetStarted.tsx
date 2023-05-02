import React from 'react';
import styles from './GetStarted.module.scss';
import githubLogo from '../../assets/github-mark/github-mark-white.png';

const GetStarted = (): JSX.Element => {
  return (
    <div className={styles.getStartedDisplay}>
      <h1>Get Started</h1>
      <p>
        Getting started with Docketeer is easy!
        <br />
        Navigate to our GitHub page and follow our detailed instructions under
        "Installation"
      </p>
      <div className={styles.githubButton}>
        <a
          className={styles.githubLink}
          href="https://github.com/open-source-labs/Docketeer"
        >
          GitHub <img className={styles.logo} src={githubLogo}></img>
        </a>
      </div>
    </div>
  );
};

export default GetStarted;
