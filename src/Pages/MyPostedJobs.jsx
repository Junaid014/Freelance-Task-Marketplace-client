import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import JobsCard from '../Components/JobsCard';
import Swal from 'sweetalert2';

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

    const handleDelete = (_id) => {
  fetch(`http://localhost:3000/jobs/${_id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deletedCount) {
        Swal.fire("Deleted!", "Your job has been deleted.", "success");
        setJobs(prev => prev.filter(job => job._id !== _id));
      }
    });
};

    return (
         <div className='grid grid-cols-3'>
                {
                    jobs.map((job,index)=>
                    <JobsCard 
                    key={job._id}
                    job={job}
                    onDelete={handleDelete}
                    showDelete={true}
                    index={index}
                    ></JobsCard>)
                }
            </div>
    );
};

export default MyPostedJobs;