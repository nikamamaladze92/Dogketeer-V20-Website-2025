import React from 'react';
// import Navbar from './/Navbar';
// import Home from './Home';
// import Features from './Features';
import Demo from './Demo/Demo';
import GetStarted from './GetStarted/GetStarted';
// import Team from './Team';

const Page = (): JSX.Element => {
  return (
    <div>
      {/* <Navbar />
      <Home />
      <Features /> */}
      <div>
      <Demo />
      </div>
      <GetStarted />
      {/* <Team /> */}
    </div>
  );
};


export default Page;