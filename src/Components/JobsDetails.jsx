import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Footer from './Footer';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const JobsDetails = () => {
  const job = useLoaderData();
  const { deadline, title, username, category,bidCount, description, budget, _id, photo } = job
const [localBidCount, setLocalBidCount] = useState(bidCount || 0);
  const { user } = use(AuthContext)
  const [hasBid, setHasBid] = useState(false);

  useEffect(() => {
    if (job.bidEmails?.includes(user?.email)) {
      setHasBid(true);
    }
  }, [job, user]);

  const handleBid = () => {
    fetch(`https://freelancer-task-marketplace-server-five.vercel.app/jobs/${_id}/bid`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user?.email }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setHasBid(true);
          setLocalBidCount(prev => prev + 1);
          toast.success('Bid placed successfully!');
        } else {
          toast.error('already bid on this');
        }
      });
  };

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
           <div className='flex items-center justify-between'>
             <h2 className="text-lg font-bold text-gray-800">{category}</h2>
             <p className='text-lg font-bold text-gray-700'> Total Bid: <span className='bg-gray-700 text-white border border-white px-2 rounded-full w-[30px]'>{localBidCount}</span></p>
           </div>
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

            {/* Bid Button */}
            <div className="flex items-center gap-5 mt-3">
              <h2 className='text-lg font-bold'>Bid Now:</h2>
             <div className='relative group'>
               <button
                onClick={handleBid}
                className={`border border-gray-300 ${hasBid ? ' bg-red text-2xl  cursor-not-allowed' : ' cursor-pointer bg-gray-600 relative text-2xl'}`}
              >
                {hasBid ? '❤️' : '🤍'}
              </button>
              {hasBid && (
    <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
      You have already bid on this
    </span>
  )}
             </div>
            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </>

  );
};

export default JobsDetails;