import React, { useState, useRef } from 'react';
import { Zoom } from 'react-slideshow-image';
import style from './carousel.module.css';
import 'react-slideshow-image/dist/styles.css';

import data from '../carousel';

const CarouselImage = () => {
  console.log(data);
  const slideRef = useRef();
  const [cr, setCr] = useState(data);
  const zoomInProperties = {
    indicators: true,
    indicators: (i) => (
      <div className={style.indicator}>
        <img
          src={`/carousel/${i + 1}.jpg`}
          alt='chitwan kagaz'
          style={{ height: '40px' }}
        />
      </div>
    ),
    scale: 1.4,
    canSwipe: true,
    duration: 2000,
    transitionDuration: 800,
    pauseOnHover: true,
  };
  const goto = (id) => {
    slideRef.current.goTo(id);
  };
  console.log(data);
  return (
    <div className='content-center self-center pt-5 '>
      <Zoom {...zoomInProperties} ref={slideRef}>
        {cr.map((each, index) => (
          <>
            <div key={index} style={{ width: '100%' }}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  maxHeight: '500px',
                }}
                src={`/carousel/${each.id}.jpg`}
              />
              <div className='absolute text-lg -mt-16 text-white px-4'>
                <p>{each.name}</p>
              </div>
            </div>
          </>
        ))}
      </Zoom>
      {/* <div className={style.container}>
        {cr.map((ss) => (
          <div key={ss.id}>
            <img
              src={`/carousel/${ss.id}.jpg`}
              alt={ss.name}
              onClick={goto(ss.id)}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CarouselImage;
