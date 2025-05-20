import React from 'react';
import { useLoaderData } from 'react-router';

const JobsDetails = () => {
    const job=useLoaderData();

    return (
        <div>
            <h2>title: {job.title}</h2>
        </div>
    );
};

export default JobsDetails;