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
    <>
      <Zoom {...zoomInProperties} ref={slideRef}>
        {cr.map((each, index) => (
          <>
            <section className='text-gray-600 body-font'>
              <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                  <img
                    key={index}
                    className='obect-cover object-center  rounded z-0  '
                    src={`/carousel/${each.id}.jpg`}
                  />
                  {/* <div className=''>
                <p className={style.text}>{each.name}</p>
              </div> */}
                </div>
              </div>
            </section>
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
    </>
  );
};

export default CarouselImage;
