'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false }); // Dynamically import react-owl-carousel with no 

const ClientOwlCarousel = ({ children }) => {
  const options = {
    margin: 14,
    responsiveClass:true,
    loop: false,
    responsive: {
      0: {
        items: 1.2,
        // loop: true,
        center:true
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return <OwlCarousel className="owl-carousel owl-theme" {...options} >{children}</OwlCarousel>;
};

export default ClientOwlCarousel;
