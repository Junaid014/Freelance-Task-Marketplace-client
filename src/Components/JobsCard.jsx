
import { Link } from 'react-router';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { MdDeleteOutline } from 'react-icons/md';
import { FaPenFancy } from 'react-icons/fa';


const JobsCard = ({ job, index, onDelete, showDelete = false, hideDetails = true }) => {
  const { deadline, title, category, description, budget, _id, photo } = job
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), index * 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [index]);

  const handleDelete = () => {
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
        onDelete(_id);
      }
    })
  }


  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out transform ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>


      <div className="card bg-base-200 w-[370px] shadow-lg shadow-gray-500 transition-transform duration-300 hover:-translate-y-1">
        <figure>
          <img
            src={photo} className='h-[250px] object-cover rounded-2xl p-1 w-full'
            alt="jobs" />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-bold text-gray-800">{category}</h2>
          <h2 className="text-sm font-medium text-gray-800">{title}</h2>
          <h3 className="text-sm text-black font-semibold pb-3">Deadline:<span className='font-medium text-white bg-[#444b53] rounded-lg px-2  py-0.5'>{deadline}</span> </h3>
          <div className='flex justify-between items-center border-t pt-3 pb-2.5 border-dashed border-gray-400'>
            <p className='text-sm font-medium'>Starting From:</p>
            <p className='text-sm font-bold '>${budget} /hr</p>
          </div>
          {
            hideDetails && (
              <div className="card-actions">
                <Link to={`/jobs/${_id}`} className="btn bg-gradient-to-r from-black to-gray-600 text-white rounded-lg font-medium shadow-md hover:from-black hover:to-gray-700 transition duration-300  w-full">View Details</Link>
              </div>
            )
          }
          <div>
            {
              showDelete && (
                <div className=" justify-between flex">
                  <button onClick={handleDelete} className="btn bg-[#EA4744ED] hover:bg-[#EA4744] px-5"> <p className="text-xl text-white"><MdDeleteOutline /></p></button>


                  <Link to={`/updatetask/${_id}`}><button className="btn px-5 bg-orange-200"><p><FaPenFancy /></p></button></Link>
                </div>
              )
            }
          </div>
        </div>
      </div>

      {/* <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="jobs"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{deadline}</p>
          <p>${budget} /hr </p>
          <div className="card-actions">
            <Link to={`/jobs/${_id}`} className="btn btn-primary">Buy Now</Link>
          </div>
          <div>
            {
              showDelete && (
                <button
                  onClick={handleDelete}
                  className="btn cursor-pointer bg-orange-500">X</button>
              )
            }
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default JobsCard;