import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <header className=''>
               <Navbar></Navbar>
            </header>
            <main className=' pt-16'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default AuthLayout;