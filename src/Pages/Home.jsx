import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import JobsCard from '../Components/JobsCard';
import Count from '../Components/Count';
import Slider from '../Components/Slider';
import Footer from '../Components/Footer';
import Review from '../Components/Review';

const Home = () => {
    // const jobs = useLoaderData();
    
     const[review,setReview]=useState([]);
     const [jobs,setJobs]=useState([])
     useEffect(()=>{
        fetch('http://localhost:5173/jobs/recent')
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
     },[])
     
     useEffect(()=>{
        fetch('/review.json')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
            
        });
        
    },[])

    return (
        <div className=''>
            <Slider/>

            
            <div className='text-center  mt-8 mb-16'>
                <h1 className='text-4xl font-bold text-gray-800 mb-3'>Find the optimal employment opportunity <br /> that aligns with your skillset</h1>
                <p className='text-gray-700'>Your premier online marketplace. Find quality products and services, connect with trusted sellers, <br /> and enjoy a seamless shopping experience today.</p>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1  lg:mx-auto mx-4 gap-12  mt-10 lg:w-9/12'>
               
               {
                jobs.map((job,index)=>
                        <JobsCard key={job._id}
                        index={index}
                        job={job}
                        ></JobsCard>
                )
               }
               
                {/* {
                    jobs.map((job, index) =>
                        <JobsCard
                            key={job._id}
                            job={job}

                            index={index}
                        ></JobsCard>)
                } */}
            </div>
                <Review  review={review}/>
            <Count/>

            <Footer />

        </div>
    );
};

export default Home;