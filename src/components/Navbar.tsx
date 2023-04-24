import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="left">
          <h1>Docketeer</h1>
          <img width="40px" height="40px" src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="none" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/demo">Demo</Link>
          </li>
          <li>
            <Link to="/getstarted">Get Started</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <div className='icons'>
            <li><Link to="https://github.com/orgs/oslabs-beta/teams/docketeer-xii"><img width="23px" height="23px" src={github} alt="github_photo"/></Link></li>
            <li><Link to="http://google.com"><img width="30px" height="30px" src={linkedin} alt="linkedin_photo"/></Link></li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
