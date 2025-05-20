import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header className=''>
               <Navbar></Navbar>
            </header>
            <main className=' pt-8'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;