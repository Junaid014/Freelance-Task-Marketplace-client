import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import JobsCard from '../Components/JobsCard';
import Count from '../Components/Count';
import Slider from '../Components/Slider';
import Footer from '../Components/Footer';

const Home = () => {
    const initialJobs=useLoaderData();
    const [jobs,setJobs]=useState(initialJobs);
    

    return (
        <div className=''>
            {/* <Slider/> */}

            <div className='grid lg:grid-cols-3 grid-cols-1  lg:mx-auto mx-4 gap-12  mt-10 lg:w-9/12'>
                {
                    jobs.map((job,index)=>
                    <JobsCard 
                    key={job._id}
                    job={job}
                    
                    index={index}
                    ></JobsCard>)
                }
            </div>

            {/* <Count/> */}

            <Footer/>
          
        </div>
    );
};

export default Home;