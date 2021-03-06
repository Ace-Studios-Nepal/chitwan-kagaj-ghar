import React from 'react';
import { useRouter } from 'next/router';
import service from '../api/services.json';

const SingleService = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt='ecommerce'
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src={`/services/${id}.jpg`}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                SERVICE NAME
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1 py-3'>
                {service[id]?.name}
              </h1>

              <p className='leading-relaxed pt-5'>{service[id]?.desc}</p>
              <br />
              <div className='flex justify-around'>
                <span className='title-font font-medium text-lg text-gray-900'>
                  starting from Rs. {service[id]?.price}
                </span>

                <a href={service[0]?.link} className='mx-1'>
                  <button className='inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'>
                    <i className='bx  bx-phone'></i>
                  </button>
                </a>
                <a href={service[1]?.link} className='mx-1'>
                  <button className='inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'>
                    <i className='bx  bx-mail-send'></i>
                  </button>
                </a>
                <a href={service[2]?.link} className='mx-1'>
                  <button className='inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'>
                    <i className='bx  bxl-facebook'></i>
                  </button>
                </a>
                <a href={service[3]?.link} className='mx-1'>
                  <button className='inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'>
                    <i className='bx  bxl-whatsapp'></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>
        <i
          className='bx bxs-left-arrow left-icon'
          onClick={() => router.push(`/services/${parseInt(id) - 1}`)}
        ></i>
      </div>
      <div>
        <i
          className='bx bxs-right-arrow next-icon'
          onClick={() => router.push(`/services/${parseInt(id) + 1}`)}
        ></i>
      </div> */}
    </>
  );
};

export default SingleService;
