import React from 'react';

import service from './api/services.json';

const Services = () => {
  return (
    <>
      <h1 className='text-center title-font  sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
        Our Services
      </h1>
      {/* <section className='text-gray-600 body-font'>
        {service.map((ss) => {
          return (
            <div
              className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'
              key={ss.id}
            >
              <img
                className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
                alt='hero'
                src={ss.img}
              />
              <i className={ss.boxicon}></i>
              <div className='text-center lg:w-2/3 w-full'>
                <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
                  {ss.name}
                </h1>
                <p className='mb-8 leading-relaxed'>{ss.desc}</p>
                <div className='flex justify-center'>
                  <button className='inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'>
                    <a href='mailto:acestudiosnepal@gmail.com'>
                      Contact us for yours
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section> */}
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -mx-4 -mb-10 text-center'>
            {service.map((ss) => {
              return (
                <div className='sm:w-1/2 mb-10 px-4'>
                  <div className='rounded-lg h-64 overflow-hidden'>
                    <img
                      alt='chitwan kagaj ghar'
                      className='object-cover object-center h-full w-full'
                      src={`/services/${ss.id}.jpg`}
                    />
                  </div>
                  <h2 className='title-font text-2xl font-medium text-gray-900 mt-6 mb-3'>
                    {ss.name}
                  </h2>
                  <p className='leading-relaxed text-base'>{ss.desc}</p>
                  <button className='flex mx-auto mt-6 text-white bg-purple-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 rounded'>
                    <a href={ss.link}>{ss.linkName}</a>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
