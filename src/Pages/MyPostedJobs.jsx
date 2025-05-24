import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';
import Footer from '../Components/Footer';
import NoPostedJob from '../Components/NoPostedJob';
import { MdDeleteOutline } from 'react-icons/md';
import { FaPenFancy } from 'react-icons/fa';
import { Link } from 'react-router';
import Loading from './Loading';


const MyPostedJobs = () => {
  const { user ,loading } = use(AuthContext);
  const [jobs, setJobs] = useState([]);
   const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setDataLoading(true);
    fetch(`https://freelancer-task-marketplace-server-five.vercel.app/myCart/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setDataLoading(false);
      });
      
  }, [user]);
  if (loading || dataLoading) {
    return <Loading />;
  }

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://freelancer-task-marketplace-server-five.vercel.app/jobs/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your job has been deleted.", "success");
              setJobs(prev => prev.filter(job => job._id !== _id));
            }
            
          });
      }
    });
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow mb-14'>
        {
          jobs.length === 0 ? (
            <NoPostedJob />
          ) : (
            <div className="overflow-x-auto mt-10 lg:w-11/12 mx-auto">
              <table className="table table-zebra w-full text-sm">
                <thead>

                  <tr className="bg-gray-200 text-gray-800">

                    <th>No</th>
                    <th>Job Info</th>
                    <th>Category</th>
                    <th>Budget</th>
                    <th>Deadline</th>
                    <th>Bids</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {

                    jobs.map((job, index) => (
                      <tr key={job._id}>
                        <th className='lg:flex hidden'>{index + 1}</th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img
                                  src={job.photo}
                                  alt="job"
                                />

                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{job.title}</div>
                              <div className="text-xs opacity-50">{job.description?.slice(0, 40)}...</div>
                            </div>
                          </div>
                        </td>
                        <td>{job.category}</td>

                        <td>${job.budget}/hr</td>
                        <td>{job.deadline}</td>
                        <td className='text-base-content font-semibold text-lg '>{job.bidCount || 0}</td>
                        <td>
                          <div className="flex gap-5">
                            <button
                              onClick={() => handleDelete(job._id)}
                              className="btn btn-sm bg-[#EA4744ED] hover:bg-[#EA4744] text-white"
                            >
                              <MdDeleteOutline className="text-lg" />
                            </button>
                            <Link to={`/updatetask/${job._id}`}>
                              <button className="btn btn-sm bg-orange-200">
                                <FaPenFancy className="text-sm" />
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          )
        }
      </div>
      <Footer />
    </div>
  );
};

export default MyPostedJobs;































