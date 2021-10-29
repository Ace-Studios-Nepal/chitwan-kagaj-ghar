import React from 'react';

import service from './api/services.json';

const Services = () => {
  return (
    <>
      {service.map((ss) => {
        return (
          <section className='text-gray-600 body-font' key={ss.id}>
            <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
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
          </section>
        );
      })}
    </>
  );
};

export default Services;
