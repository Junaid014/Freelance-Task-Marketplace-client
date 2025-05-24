import React from 'react';
import {  FaStar } from 'react-icons/fa';

const ReviewCard = ({ rev }) => {
  const { review, peopleName, job ,image} = rev;
  
  return (
    <div className='p-8  bg-gray-50 '>
         
      <div className="bg-white flex flex-col lg:flex-row gap-4 lg:p-8 p-5 shadow-md rounded-xl hover:shadow-2xl cursor-pointer lg:h-52 md:h-52  border border-gray-200">
        <img className='w-[250px] rounded-lg' src={image} alt="" />
            
            <div>
                 <h3 className="text-lg font-bold text-gray-900">{peopleName}</h3>
        
        <div className='text-amber-500 flex gap-1 mb-2'>
          {[...Array(4)].map((_, i) =>

            <FaStar key={i} />
          )}
        </div>
        <p className="text-gray-700 text-base font-semibold mb-2 ">"{review}"</p>
      
        <p className="text-sm font-semibold mt-1 text-gray-500">{job}</p>
            </div>
      </div>
      </div>
  );
};

export default ReviewCard;