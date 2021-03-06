import React from 'react';
import Link from 'next/link';

import service from '../services.json';

const ServicesModel = () => {
  return (
    <>
      <h1 className='text-center title-font  sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
        Our Services
      </h1>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {service.map((ss, index) => {
              return (
                <Link href={`/services/${index}`} key={index}>
                  <div
                    className='lg:w-1/4 md:w-1/2 p-4 w-full'
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      alt='chitwan kagaj ghar'
                      className='obect-cover object-center overflow-hidden h-48 w-full rounded '
                      src={`/services/${index}.jpg`}
                    />

                    <div className='mt-4'>
                      <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                        SERVICES
                      </h3>
                      <h2 className='text-gray-900 title-font text-lg font-medium'>
                        {ss.name.length > 30
                          ? ss.name.substring(0, 30) + '...'
                          : ss.name}
                      </h2>
                      <p className='mt-1'>
                        {ss.desc.length > 100
                          ? ss.desc.substr(0, 100) + ' ...'
                          : ss.desc}
                        {ss.desc.length > 100 ? (
                          <span className='opacity-50 hover:opacity-100'>
                            see more
                          </span>
                        ) : (
                          ''
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesModel;
