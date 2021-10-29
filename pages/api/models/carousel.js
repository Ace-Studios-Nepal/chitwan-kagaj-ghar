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
      {/* <Carousel>
        {data.map((ss) => {
          return (
            <Carousel.Item key={ss.id}>
              <img
                className='d-block '
                src={ss.img}
                alt='First slide'
                style={{ maxHeight: '500px' }}
              />
              <Carousel.Caption>
                <h5>{ss.name}</h5>
                <p>{ss?.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel> */}
    </div>
  );
};

export default CarouselImage;
