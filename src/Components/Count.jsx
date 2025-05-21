import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Count = () => {
  const [prev, View] = useInView({triggerOnce:true });

  return (
    <div>

      <h2 className='text-4xl font-extrabold text-center mt-24'>Expert Help, On Demand</h2>
      <p className='text-[#0F0F0F] text-base text-center w-[900px] mx-auto mt-4 mb-8'>
       Get projects done faster with trusted freelancers, available on demand and ready to bring your ideas to life.
      </p>

      <div ref={prev} className='mb-24 grid md:grid-cols-4 grid-cols-1 gap-10'>
        {[
              { img: '/team.png', count: 86205, label: 'Active Talent', duration: 12 },
          { img: '/company.png', count: 16590, label: 'Registered Companies', duration: 6 },
          { img: '/project.png', count: 68530, label: 'Project Posted Till Date', duration: 10 },
          { img: '/success-review.png', count: 4200, label: 'Total Customer FeedBack Ratio', duration: 4 },
        ].map((item, idx) => 
          
          (
          <div key={idx} className='bg-[#0F0F0F0D] w-11/12 mx-auto p-10 border border-[#0F0F0F26] rounded-lg'>
            <img className='border w-24 mx-auto border-dashed border-[#0F0F0F26]' src={item.img} alt={item.label} />
            <div className="flex text-4xl items-center justify-center font-extrabold mt-2">
              {View ? (
                <CountUp className='' end={item.count} duration={item.duration} start={1} />
              ) : 
              
              (
                0
              )}

              <p>+</p>
            </div>
            
            <h2 className='text-[#0F0F0F99] text-center text-lg font-medium mt-2'>{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Count;
