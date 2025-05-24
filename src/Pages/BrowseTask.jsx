
import { useLoaderData } from 'react-router';
import JobsCard from '../Components/JobsCard';
import Footer from '../Components/Footer';


const BrowseTask = () => {
    const jobs=useLoaderData();
    
       
       
    return (
        <div>
            <h2 className='text-3xl font-semibold lg:font-extrabold text-center mt-5 mb-16'>Browse All the Jobs we have</h2>
              <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  lg:mx-auto mx-20 mb-14   gap-12 mt-10 lg:w-9/12 '>
                {
                    jobs.map((job,index)=>
                    <JobsCard 
                    key={job._id}
                    job={job}
                    index={index}
                    ></JobsCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BrowseTask;