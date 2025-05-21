import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobsDetails = () => {
    const job=useLoaderData();
     const { deadline, title, category, description, budget, _id, photo } = job

    return (
         <div className=" bg-base-200 h-[300px] px-6 py-7 transition-transform duration-300 hover:-translate-y-1">
        <div className="flex flex-col lg:flex-row gap-5">
          <img
           src={photo}
            alt="jobs"
            className="w-52 h-[200px] rounded-lg shadow-2xl"
          />
          <div className=''>
            <h1 className="text-lg font-semibold">{title}</h1>
            <h3 className="text-sm text-black font-semibold">Deadline:<span className='font-medium text-gray-700'>{deadline}</span> </h3>
            <h1 className="text-lg font-semibold">{}</h1>
          

          </div>
        </div>
      </div>
    );
};

export default JobsDetails;