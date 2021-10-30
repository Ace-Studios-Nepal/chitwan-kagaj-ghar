import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Zoom } from 'react-slideshow-image';
import Image from 'next/image';
import 'react-slideshow-image/dist/styles.css';

import data from '../carousel';
const CarouselImage = () => {
  const [cr, setCr] = useState(data);
  const zoomInProperties = {
    indicators: true,
    scale: 1.4,
    canSwipe: true,
    duration: 1500,
    transitionDuration: 500,
    pauseOnHover: false,
  };
  console.log(data);
  return (
    <div className='content-center self-center pt-5'>
      <Zoom {...zoomInProperties}>
        {cr.map((each, index) => (
          <div key={index} style={{ width: '100%' }}>
            <img
              style={{ objectFit: 'cover', width: '100%', maxHeight: '500px' }}
              src={`/carousel/${each.id}.jpg`}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default CarouselImage;
