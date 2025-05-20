import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import JobsCard from '../Components/JobsCard';

const Home = () => {
    const initialJobs=useLoaderData();
    const [jobs,setJobs]=useState(initialJobs);

    return (
        <div>

            <div className='grid grid-cols-3'>
                {
                    jobs.map((job,index)=>
                    <JobsCard 
                    key={job._id}
                    job={job}
                    index={index}
                    ></JobsCard>)
                }
            </div>
          
        </div>
    );
};

export default Home;