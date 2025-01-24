'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from './Hero';
import Hottest from './Hottest';
import LearnMore from './LearnMore';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
const MainSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require('jquery');
    }
  }, []);

  return (
    <>
      <Hero />
      <main>
        <div className="container">
          <Hottest/>
          <LearnMore/>
        </div>
      </main>
    </>
  );
};

export default MainSection;
