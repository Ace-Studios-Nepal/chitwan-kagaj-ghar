import React from 'react';
import CarouselImage from './api/models/carousel';

const Products = () => {
  return (
    <>
      <h1 className='text-center title-font  sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
        Our Products
      </h1>
      <>
        <CarouselImage />
      </>
    </>
  );
};

export default Products;
