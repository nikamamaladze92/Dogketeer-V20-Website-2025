import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
// import Navbar from './components/Navbar';
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Demo from "./components/Demo/Demo";
import GetStarted from "./components/GetStarted/GetStarted";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Page />
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
