import React from 'react';
import { about } from './api/carousel';

const About = () => {
  return (
    <>
      <h1 className='text-center title-font  sm:text-4xl text-3xl my-2 font-medium text-gray-900'>
        About us
      </h1>

      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-col px-5 py-24 justify-center items-center'>
          <div className='w-full md:w-2/3 flex flex-col mb-5 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 sm:mb-0 '>
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
      {about.map((item, index) => {
        return (
          <section
            className='text-gray-600 body-font content-center'
            key={index}
          >
            <div className='container content-center px-5  mx-auto'>
              <div className='xl:w-1/2 lg:w-2/4 w-full mx-auto text-center '>
                <i className='bx bxs-quote-right'></i>
                <p className='leading-relaxed text-lg'>{item.message}</p>
                <span className='inline-block w-32 h-32 mt-2'>
                  <img
                    className='rounded-full object-cover '
                    src={item.image}
                    alt={item.postBy}
                  />
                </span>
                <h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
                  {item.postBy}
                </h2>
                <p className='text-gray-500'>{item.org} </p>
              </div>
            </div>
          </section>
        );
      })}
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-col px-5 py-8 justify-center items-center'>
          <div className='w-full md:w-2/3 flex flex-col mb-2 items-center text-center'>
            <section className='text-gray-600 body-font'>
              <div className='container px-5 py-4 mx-auto flex sm:flex-nowrap flex-wrap'>
                <div className=''>
                  <h4>We are here : {about[0].location} </h4>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m8!1m3!1d1309.59022853723!2d84.4217429432392!3d27.69390100254705!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m4!1s0x0%3A0x33d1f0389a2f0e6d!3m2!1d27.694038799999998!2d84.42274429999999!4m0!5e0!3m2!1sen!2sus!4v1637662566321!5m2!1sen!2sus'
                    width='600'
                    height='450'
                    style={{ border: '0px' }}
                    allowfullscreen=''
                    loading='lazy'
                    className='relative self-center'
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
