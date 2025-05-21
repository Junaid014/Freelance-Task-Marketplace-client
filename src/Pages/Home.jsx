import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import JobsCard from '../Components/JobsCard';
import Count from '../Components/Count';

const Home = () => {
    const initialJobs=useLoaderData();
    const [jobs,setJobs]=useState(initialJobs);
    

    return (
        <div>

            <div className='grid grid-cols-3 gap-5 mt-10 w-11/12 mx-auto'>
                {
                    jobs.map((job,index)=>
                    <JobsCard 
                    key={job._id}
                    job={job}
                    
                    index={index}
                    ></JobsCard>)
                }
            </div>

            <Count/>
          
        </div>
    );
};

export default Home;