import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='text-gray-400 bg-gray body-font  z-10'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <p className='text-sm text-gray-400 bg-gray sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2021 —
          <a
            href='https://www.acestudios.ml/'
            className='text-gray-600 ml-1'
            rel='noopener noreferrer'
            target='_blank'
          >
            Powered by Ace Studios
          </a>
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <a
            href='https://www.facebook.com/CKG-Wedding-Cards-637391076307034/'
            className='text-gray-500'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.facebook.com/CKG-Wedding-Cards-637391076307034/'
            className='ml-3 text-gray-500'
          >
            <FaTwitter />
          </a>
          <a
            href='https://www.facebook.com/CKG-Wedding-Cards-637391076307034/'
            className='ml-3 text-gray-500'
          >
            <FaInstagram />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
