import React from 'react';



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination ,Autoplay } from 'swiper/modules';
import ReviewCard from './ReviewCard';
const Review = ({review}) => {
    
    
    return (
        <>
         <h1 className='text-4xl text-center mt-8 lg:mt-28 mb-10 font-bold text-gray-800'>Love Our Users FeedBack</h1>
         
      <Swiper 
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 1000, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: true, 
      }}
      pagination={{
        clickable: true,
      }}
      speed={1500}
      allowTouchMove={true} 
      modules={[FreeMode, Pagination, Autoplay]} 
      className="mySwiper max-w-9/12 mx-auto mb-20"
      breakpoints={{
        
        0: {
          slidesPerView: 1,
        },
       
        768: {
          slidesPerView: 1,
        },
        
        1024: {
          slidesPerView: 2,
        },
      }}
    >
        
            <>
               
            {
                review.map(rev=><SwiperSlide key={rev.id}>
                    <ReviewCard rev={rev} />
                  </SwiperSlide>)
            }</>
     
        
      </Swiper>
    </>
    );
};

export default Review;