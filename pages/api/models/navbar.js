import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <header className='text-gray-400 bg-gray-900 body-font sticky top-0'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a
            className='flex title-font font-medium items-center text-white mb-4 md:mb-0'
            style={{
              cursor: 'pointer',
            }}
          >
            <span className='ml-3 text-xl'>Chitwan KagajGhar</span>
          </a>
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <Link href={'/'}>
              <a className='mr-5 hover:text-white'>Home</a>
            </Link>
            <Link href={'/services'}>
              <a className='mr-5 hover:text-white'>Services</a>
            </Link>
            <Link href={'/products'}>
              <a className='mr-5 hover:text-white'>Products</a>
            </Link>
            <Link href={'/about'}>
              <a className='mr-5 hover:text-white'>About us</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
