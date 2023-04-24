import React from 'react';
import Navbar from './/Navbar';
import Home from './Home';
import Features from './Features';
import Demo from './Demo';
import GetStarted from './GetStarted';
import Team from './Team';

const Page = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Demo />
      <GetStarted />
      <Team />
    </div>
  );
};


export default Page;