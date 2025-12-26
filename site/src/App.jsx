import { BrowserRouter } from "react-router-dom";

import React, { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Snow from "./components/Snow";
import Background from "./components/Background";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <Snow />
      <Background />
      <div className='relative z-0 text-white'>
        <div className='relative'>
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
