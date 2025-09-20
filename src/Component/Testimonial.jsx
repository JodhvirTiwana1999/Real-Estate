
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../style.css';
// import 'swiper/css/navigation'
// import required modules
import { Navigation,Autoplay } from 'swiper/modules';
import { Testimonialdata } from '../data/Datatestimonial';




export default function Testimonial({  }) {
  return (
    <div className=' mx-auto max-w-[1280px] pb-10 h-full relative xs:px-[60px] sm:px-[60px] md:px-[60px] lg:px-[80px] xl:px-0 '>
         {/* 🔁 Custom navigation buttons outside Swiper */}
      <button className="w-[48px] h-[48px] rounded-[20px] p-2 bg-black custom-swiper-button-prev absolute left-4 top-1/2 z-10 transform -translate-y-1/2">
        <img src="/image/ArrowWhite.svg" className='rotate-180' alt="Previous" />
      </button>
      <button className="w-[48px] h-[48px] rounded-[20px] p-2  bg-black custom-swiper-button-next absolute right-4 top-1/2 z-10 transform -translate-y-1/2">
        <img src="/image/ArrowWhite.svg"  alt="Next" />
      </button>
         
          <Swiper
        loop={true}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        autoplay={{
              delay: 2500,
              disableOnInteraction: false            
  
}}
        // spaceBetween={25}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Autoplay]}
        onSwiper={(swiper) => {
       
      }}
      breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
        }}


        className="mySwiper testimonial px-[60px]  flex justify-center"
      >
         
          {
            Testimonialdata.map((value,index)=>{
                 return(
                         <SwiperSlide key={index} className='!text-start flex gap-2 bg-transparent rounded-t-[25px] '>
                   <div className='overflow-hidden w-full  md:max-w-[310px] lg:max-w-[400px] xl:max-w-[480px] max-w-[480px] h-full lg:max-h-[400px] xl:max-h-[400px] border-1 border-[#D9D9D9] rounded-[45px] pb-5 xs:px-[5px] xm:px-[50px] bg-white'>
                     <ul className='flex mt-10 gap-1 '>
                         <img src="./image/star.svg" alt="star" />
                         <img src="./image/star.svg" alt="star" />
                         <img src="./image/star.svg" alt="star" />
                         <img src="./image/star.svg" alt="star" />
                     </ul>
                     <p className='xs:text-[13px] xm:text-[18px] leading-[25px] mt-[8px]  text-black'>
                        Finding my dream home was an unforgettable experience. The property exceeded my expectations, offering comfort and beauty. The service was outstanding, and I couldn’t be happier with my purchase
                     </p>

                     <hr className='border-1 relative left-[-50px] top-[15px] border-1 border-[#6F7171]'/>
                     
                     <div className='flex gap-[16px] mt-[26px]'>
                              <div>
                                   <img src="./image/team 3.svg" alt="" />
                              </div>
                              <div className='flex flex-col justify-center'>
                                   <h4 className='xs:text-[12px] xm:text-[15px] md:text-[15px] lg:text-[20px] text-black'>{value.Name}</h4>
                                   <h6 className='text-[14px] text-[#A4B5BA] mt-1'>Property Expert</h6>
                              </div>
                     </div>

                 </div>

</SwiperSlide>

                 )
            })
          }

 
       


       
        
      </Swiper>

    </div>
  )
}



