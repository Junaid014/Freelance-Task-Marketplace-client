import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
   <div className=''>
  <Navbar />
  <div className="pt-16">
    <Outlet />
  </div>
</div>
    );
};

export default Root;