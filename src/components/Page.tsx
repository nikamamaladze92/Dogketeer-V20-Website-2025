import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Features from './Features/Features';
import Demo from './Demo/Demo';
import GetStarted from './GetStarted/GetStarted';
import Team from './Team/Team';
import { Link, Element } from 'react-scroll';

const Page = (): JSX.Element => {
  return (
    <div className="pageContainer">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="features">
        <Features />
      </Element>
      <Element name="demo">
        <div>
          <Demo />
        </div>
      </Element>
      <Element name="getstarted">
        <GetStarted />
      </Element>
      <Element name="team">
        <Team />
      </Element>
    </div>
  );
};

export default Page;
