
import { Link } from 'react-router';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

const JobsCard = ({ job, index, onDelete, showDelete = false }) => {
  const { deadline, title, category, description, budget, _id, photo } = job
  const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), index * 300);
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


<div className="card bg-base-200 w-96 shadow-sm">
  <figure>
    <img
      src={photo} className='h-[250px] object-cover rounded-2xl p-1 w-full'
            alt="jobs"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
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