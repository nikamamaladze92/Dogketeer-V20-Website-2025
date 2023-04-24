import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
// import Navbar from './components/Navbar';
import Home from "./components/Home";
import Features from "./components/Features";
import Demo from "./components/Demo/Demo";
import GetStarted from "./components/GetStarted/GetStarted";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Router basename="/">
        <Page/>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/features" Component={Features} />
          <Route path="/demo" Component={Demo} />
          <Route path="/getstarted" Component={GetStarted} />
          <Route path="/team" Component={Team} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/features',
//     element: <Features />
//   },
//   {
//     path: '/demo',
//     element: <Demo />
//   },
//   {
//     path: '/getstarted',
//     element: <GetStarted />
//   },
//   {
//     path: '/team',
//     element: <Team />
//   },
// ])
