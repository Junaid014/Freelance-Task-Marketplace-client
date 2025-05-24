import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import JobsCard from '../Components/JobsCard';
import Count from '../Components/Count';
import Slider from '../Components/Slider';
import Footer from '../Components/Footer';
import Review from '../Components/Review';
import { AuthContext } from '../Provider/AuthContext';
import Loading from './Loading';

const Home = () => {
    // const jobs = useLoaderData();
    
     const[review,setReview]=useState([]);
     const {  loading } = use(AuthContext);
        const [dataLoading, setDataLoading] = useState(true);
     const [jobs,setJobs]=useState([])
     useEffect(()=>{
         setDataLoading(true);
        fetch('https://freelancer-task-marketplace-server-five.vercel.app/jobs/recent')
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
            setDataLoading(false);
        })
     },[])
     
     
     useEffect(()=>{
        fetch('/review.json')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
            
        });
        
    },[])

    if (loading || dataLoading) {
    return <Loading />;
  }

    return (
        <div className=''>
            <Slider/>

            
            <div className='text-center  mt-8 mb-16'>
                <h1 className='text-4xl font-bold text-gray-800 mb-3'>Find the optimal employment opportunity <br /> that aligns with your skillset</h1>
                <p className='text-gray-700'>Your premier online marketplace. Find quality products and services, connect with trusted sellers, <br /> and enjoy a seamless shopping experience today.</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-20 lg:mx-auto  gap-12  mt-10 lg:w-9/12'>
               
               {
                jobs.map((job,index)=>
                        <JobsCard key={job._id}
                        index={index}
                        job={job}
                        ></JobsCard>
                )
               }
               
              
            </div>
                <Review  review={review}/>
            <Count/>

            <Footer />

        </div>
    );
};

export default Home;