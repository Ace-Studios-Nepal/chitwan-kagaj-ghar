import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '../carousel';
const CarouselImage = () => {
  console.log(data);
  return (
    <div className='content-center self-center pt-5'>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        emulateTouch={true}
        interval={2000}
        stopOnHover={true}
      >
        {data.map((ss) => {
          return (
            <div
              key={ss.id}
              style={{
                maxHeight: '600px',
              }}
            >
              <Image src={ss.img} height={1000} width={1500}></Image>
            </div>
          );
        })}
      </Carousel>
      <h1 className='text-center'>hello</h1>
    </div>
  );
};

export default CarouselImage;
