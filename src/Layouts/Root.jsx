import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
   <div >
  <Navbar />
  <div className="pt-16">
    <Outlet />
  </div>
</div>
    );
};

export default Root;