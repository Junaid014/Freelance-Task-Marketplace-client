import React from 'react';
import { SiFacebook } from 'react-icons/si';
import { FaXTwitter, FaPhone } from 'react-icons/fa6';
import { IoAccessibility, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5';
import { FaRegSquare } from 'react-icons/fa';
import { MdLocationOn, MdMarkEmailRead } from 'react-icons/md';
import logo from '../assets/logo.webp'; // Update with your logo path
import { TbWorld } from 'react-icons/tb';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import img1 from "../assets/apple_2504884.png"
import img2 from "../assets/playstore_2335393.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-black text-white p-10">
        <aside className="lg:mx-16 mx-0">
          <div className="flex items-center gap-2">
            <img className="w-14 h-12 border border-gray-700" src={logo} alt="Workly Logo" />
            <h1 className="text-3xl font-extrabold">WORKLY</h1>
          </div>
          <div>
            <div className='flex items-center gap-3 '>
              <TbWorld className='text-2xl' />
              <a className='text-lg' >US(International)/ <br />English</a>

            </div>
            <div className='flex items-center gap-3 mt-2'>
              <IoMdHelpCircleOutline className='text-2xl ' />
              <a className='text-lg' >Help & Support</a>

            </div>
            <div className='flex items-center gap-3 mt-2'>
              <IoAccessibility className='text-2xl ' />
              <a className='text-lg' >Accessibility</a>

            </div>
          </div>


        </aside>

        <nav>
          <h6 className="footer-title font-extrabold">Freelancer</h6>
          {["Post a Job", "Browse Freelancers", "Pricing", "Privacy Policy", "Candidate Listing"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-1 hover:text-blue-400">
           
              <a className="link link-hover font-medium  ">{item}</a>
            </div>
          ))}
        </nav>

        <nav>
          <h6 className="footer-title font-extrabold">About</h6>
          {["About Us", "Contact", "Terms & Conditions", "Blog", "Careers"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-1 hover:text-blue-400">
             
              <a className="link link-hover font-medium">{item}</a>
            </div>
          ))}
        </nav>

        <div>
          <div>
            <h1 className='text-2xl font-bold mb-2'>Apps</h1>
            <div className='flex gap-3 border py-2 rounded-lg px-4'>
              <img src={img1} className='w-12' alt="" />
              <div>
                <p>Available on the</p>
                <h1 className='text-lg font-semibold'>App Store</h1>
              </div>
            </div>
            <div className='flex gap-3 border py-2 rounded-lg px-4 mt-2'>
              <img src={img2} className='w-12' alt="" />
              <div>
                <p>GET IT ON</p>
                <h1 className='text-lg font-semibold'>GooglePlay</h1>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-2 mb-2">Follow us on</h3>
        <div className="grid grid-flow-col gap-5 cursor-pointer">
          <a href="https://www.facebook.com/"><SiFacebook className="text-blue-500 text-3xl" /></a>
          <a href="https://x.com/"><FaXTwitter className="text-white text-3xl" /></a>
          <a href="https://www.linkedin.com/"><IoLogoLinkedin className="text-blue-400 text-3xl" /></a>
          <a href="https://www.youtube.com/"><IoLogoYoutube className="text-red-600 text-3xl" /></a>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
