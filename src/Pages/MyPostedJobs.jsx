import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import JobsCard from '../Components/JobsCard';

const MyPostedJobs = () => {

    const { user } = use(AuthContext); 
    const [jobs, setJobs] = useState([]);

        useEffect(() => {
        fetch(`http://localhost:3000/myCart/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {

                setJobs(data);
            })
    }, [user])
    return (
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
    );
};

export default MyPostedJobs;