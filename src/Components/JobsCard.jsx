
import { Link } from 'react-router';
import React, { useEffect, useRef, useState } from 'react';

const JobsCard = ({job ,index}) => {
const {deadline,title,category,description,budget,_id, photo}=job
const [show, setShow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), index * 400); 
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


    return (
        <div
         ref={ref}
      className={`transition-all duration-1000 ease-in-out transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={photo}
      alt="jobs"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{deadline}</p>
    <div className="card-actions">
      <Link to={`/jobs/${_id}`} className="btn btn-primary">Buy Now</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default JobsCard;