import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import JobsCard from '../Components/JobsCard';
import Count from '../Components/Count';
import Slider from '../Components/Slider';
import Footer from '../Components/Footer';
import Review from '../Components/Review';

const Home = () => {
    const initialJobs = useLoaderData();
    const [jobs, setJobs] = useState(initialJobs);
     const[review,setReview]=useState([]);
     useEffect(()=>{
        fetch('/review.json')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
            
        });
        
    },[])

    return (
        <div className=''>
            {/* <Slider/> */}

            <Review  review={review}/>
            <div className='text-center mt-8 mb-16'>
                <h1 className='text-4xl font-bold text-gray-800 mb-3'>Find the optimal employment opportunity <br /> that aligns with your skillset</h1>
                <p className='text-gray-700'>Your premier online marketplace. Find quality products and services, connect with trusted sellers, <br /> and enjoy a seamless shopping experience today.</p>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1  lg:mx-auto mx-4 gap-12  mt-10 lg:w-9/12'>
                {
                    jobs.map((job, index) =>
                        <JobsCard
                            key={job._id}
                            job={job}

                            index={index}
                        ></JobsCard>)
                }
            </div>

            {/* <Count/> */}

            <Footer />

        </div>
    );
};

export default Home;