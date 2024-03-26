import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Features from './Features/Features';
import Demo from './Demo/Demo';
import WhatsNew from './WhatsNew/WhatsNew';
import GetStarted from './GetStarted/GetStarted';
import Team from './Team/Team';
// import Footer from './Footer/Footer';
import { Element } from 'react-scroll';

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
      <Element name="whatsnew">
        <WhatsNew />
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
