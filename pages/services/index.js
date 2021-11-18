import React from 'react';
import Link from 'next/link';

import service from '../api/services.json';
import ServicesModel from '../api/models/services';

const Services = () => {
  return (
    <>
      <ServicesModel />
    </>
  );
};

export default Services;
