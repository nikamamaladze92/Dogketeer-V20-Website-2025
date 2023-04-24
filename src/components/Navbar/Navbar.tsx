import React from "react";
import { Link } from "react-scroll";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
// import styles from "./Navbar.modules.scss"
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbarContainer'>
        <div className='left'>
          <h1>Docketeer</h1>
          <img width="40px" height="40px" src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="none" />
        </div>
        <ul>
          <li>
            <Link to="home" smooth={true} hashSpy={true} spy={true} duration={600}>Home</Link>
          </li>
          <li>
            <Link to="features" spy={true} hashSpy={true} smooth={true} duration={600}>Features</Link>
          </li>
          <li>
            <Link to="demo" smooth={true} hashSpy={true} spy={true} duration={600}>Demo</Link>
          </li>
          <li>
            <Link to="getstarted" smooth={true} hashSpy={true} spy={true} duration={600}>Get Started</Link>
          </li>
          <li>
            <Link to="team" smooth={true} hashSpy={true} spy={true} duration={600}>Team</Link>
          </li>
          <div className='icons'>
            <li><a href="https://github.com/orgs/oslabs-beta/teams/docketeer-xii"><img width="23px" height="23px" src={github} alt="github_photo"/></a></li>
            <li><a href="http://google.com"><img width="23px" height="23px" src={github} alt="linkedin"/>TESTING</a></li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
