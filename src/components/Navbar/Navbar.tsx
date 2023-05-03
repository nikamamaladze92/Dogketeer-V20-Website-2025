import React from 'react';
import { Link } from 'react-scroll';
import github from '../../assets/github-mark/github-mark-white.png';
import styles from './Navbar.module.scss';
import docker from '../../assets/docketeerlogo.png';

const Navbar = (): JSX.Element => {
  const displayNav = function () {
    const links = document.querySelectorAll('li');
    for (let i = 0; i < links.length; i++) {
      const link = links[i] as HTMLElement;
      if (link.style.visibility === 'visible') {
        link.style.visibility = 'hidden';
      } else link.style.visibility = 'visible';
    }
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.left}>
          <h1 className={styles.name}>Docketeer</h1>
          <img width="40px" height="40px" src={docker} alt="none" />
        </div>
        <ul>
          <div onClick={() => displayNav()}>
            <svg
              className={styles.dropBtn}
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <li className={styles.link}>
            <Link
              to="home"
              smooth={true}
              hashSpy={true}
              spy={true}
              duration={600}
            >
              Home
            </Link>
          </li>
          <li className={styles.link}>
            <Link
              to="features"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={600}
            >
              Features
            </Link>
          </li>
          <li className={styles.link}>
            <Link
              to="demo"
              smooth={true}
              hashSpy={true}
              spy={true}
              duration={600}
            >
              Demo
            </Link>
          </li>
          <li className={styles.link}>
            <Link
              to="getstarted"
              smooth={true}
              hashSpy={true}
              spy={true}
              duration={600}
            >
              Get Started
            </Link>
          </li>
          <li className={styles.link}>
            <Link
              to="team"
              smooth={true}
              hashSpy={true}
              spy={true}
              duration={600}
            >
              Team
            </Link>
          </li>
          <div className={styles.icons}>
            <li className={styles.link}>
              <a
                href="https://github.com/open-source-labs/Docketeer"
                target="_blank"
              >
                <img
                  width="23px"
                  height="23px"
                  src={github}
                  alt="github_photo"
                />
              </a>
            </li>
            <li className={styles.link}>
              <a
                href="https://www.linkedin.com/company/docketeer/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="white"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
