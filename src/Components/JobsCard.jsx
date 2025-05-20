import React from 'react';
import { Link } from 'react-router';

const JobsCard = ({job}) => {
const {deadline,title,category,description,budget,_id, photo}=job
    return (
        <div>
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