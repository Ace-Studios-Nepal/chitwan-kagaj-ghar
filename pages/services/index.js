import React from 'react';
import Link from 'next/link';

import service from '../api/services.json';
import ServicesModel from '../api/models/services';

const Services = () => {
  return (
    <div className='service'>
      <ServicesModel />
    </div>
  );
};

export default Services;
