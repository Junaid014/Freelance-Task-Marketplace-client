import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Footer from './Footer';

const JobsDetails = () => {
    const job=useLoaderData();
     const { deadline, title,username,email, category, description, budget, _id, photo } = job

    return (
      <>
      <div className=" bg-base-200 rounded-lg px-8 py-8  lg:px-20 lg:py-20 w-11/12 mx-auto mb-14 mt-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <img
           src={photo}
            alt="jobs"
            className="w-96 h-[300px] object-cover rounded-lg shadow-2xl"
          />
          <div className=''>
            <h2 className="text-lg font-bold text-gray-800">{category}</h2>
          <h2 className="text-lg mb-3 mt-3 font-medium text-gray-800">{title}</h2>
          <h3 className="text-sm text-black font-semibold pb-4">Deadline:<span className='font-medium text-white bg-[#444b53] rounded-lg px-2  py-0.5'>{deadline}</span> </h3>
          <div className='flex justify-between items-center border-t pt-4 pb-2.5 border-dashed border-gray-400'>
            <p className='text-sm font-medium'>Starting From:</p>
            <p className='text-sm font-bold '>${budget} /hr</p>
          </div>
          <p className='text-base font-bold'>Need to do :</p>
          <p className='lg:w-[500px] text-gray-700'>{description}</p>
          <span className='flex gap-2 items-center mt-4'>
            <p className='text-base font-medium'>Posted By:</p>
            <p className='font-bold text-gray-700'>{username}</p>
          </span>

          </div>
        </div>
      </div>
      <Footer></Footer>
      </>
         
    );
};

export default JobsDetails;