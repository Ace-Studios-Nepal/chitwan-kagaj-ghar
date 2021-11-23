import React from 'react';
import { about } from './api/carousel';

const About = () => {
  return (
    <>
      <h1 className='text-center title-font  sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
        About us
      </h1>

      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-col px-5 py-24 justify-center items-center'>
          <div className='w-full md:w-2/3 flex flex-col mb-16 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              CKG means Chitwan Kagaz Ghar. The wholeseller of weeding cards &
              printing materials.
            </h1>
            {/* <p className='mb-8 leading-relaxed'>
              Kickstarter biodiesel roof party wayfarers cold-pressed. Palo
              santo live-edge tumeric scenester copper mug flexitarian. Prism
              vice offal plaid everyday carry. Gluten-free chia VHS squid
              listicle artisan.
            </p> */}
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 pt-8 mx-auto'>
          {about.map((item, index) => {
            return (
              <div
                className='xl:w-1/2 lg:w-2/4 w-full mx-auto text-center lg:float-left md:float-none sm:float-none'
                key={index}
              >
                <i className='bx bxs-quote-right'></i>
                <p className='leading-relaxed text-lg'>{item.message}</p>
                <span className='inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-6'>
                  <img
                    className='rounded object-cover'
                    src={item.image}
                    alt={item.postBy}
                  />
                </span>
                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                  {item.postBy}
                </h2>
                <p className='text-gray-500'>{item.org} </p>
                <br />
                <hr />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
