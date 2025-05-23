import React, {   useState } from 'react';
import { useLoaderData } from 'react-router';
import JobsCard from '../Components/JobsCard';
import Footer from '../Components/Footer';


const BrowseTask = () => {
    const initialJobs=useLoaderData();
    
        const [jobs,setJobs]=useState(initialJobs);
       
    return (
        <div>
              <div className='grid lg:grid-cols-3 grid-cols-1  lg:mx-auto mx-4 mb-14   gap-12 mt-10 lg:w-9/12 '>
                {
                    jobs.map((job,index)=>
                    <JobsCard 
                    key={job._id}
                    job={job}
                    index={index}
                    ></JobsCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BrowseTask;