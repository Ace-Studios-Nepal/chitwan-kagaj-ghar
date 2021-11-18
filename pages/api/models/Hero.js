import React from 'react';
import Link from 'next/link';
import service from '../services.json';

const Hero = () => {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
            <img
              className='object-cover object-center rounded'
              alt='chitwan kagajghar'
              src='/hero.jpg'
            />
          </div>
          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              Design your custom wedding
              <br className='hidden lg:inline-block' />
              card with us
            </h1>
            <p className='mb-8 leading-relaxed'>
              We are the wholeseller of wedding cards & printing materials.
            </p>
            <div className='flex justify-center'>
              <a href={service[0].link} className='mx-1'>
                <button className='inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'>
                  {service[0].linkName}
                </button>
              </a>
            </div>
            <div className='flex justify-center'>
              <a href={service[1].link} className='mx-1'>
                <button className='inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'>
                  {service[1].linkName}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
