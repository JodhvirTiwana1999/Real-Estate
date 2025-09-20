
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
import { data2 } from '../data/Data2';
export default function Slider4({ onPrevClick, onNextClick, swiperRef }) {
  return (
    <div className=' mx-auto max-w-[1440px] px-4'>
          <Swiper
      loop={true}
        autoplay={{delay: 1000, }}
spaceBetween={22}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Autoplay]}
        onSwiper={(swiper) => {
        // Pass swiper instance to parent
        if (swiperRef) swiperRef.current = swiper;
      }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
         
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
className="mySwiper"
      >
        {data2.map((value,index)=>{
                     return(
                         <SwiperSlide className='mainslides  bg-transparent rounded-t-[25px] flex justify-center' key={index}>
                            <div className='mx-auto w-full max-w-[300px] h-full max-h-[413px] rounded-t-[30px] rounded-b-none shadow-[1px_5px_9px_0px_rgba(0,0,0,0.3)]'>
                        <div className='rounded-t-[30px] rounded-b-none'>
                             {/* <img src="./image/backgroun-img-slider.svg" alt="#" /> */}
                             <img src={value.image} alt="#" />
                        </div>
                        <div className='bg-white h-[113px] px-1'>
                             <ul className='flex justify-between pt-[9px]'>
                                <li className='text-[14px]  font-light'>Jan 24-2-2025</li>
                                <li className='text-[14px]  font-light'>4 min read</li>
                             </ul>
                             <p className='xm:text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] align-start text-start  mt-[5px] leading-5'>
                                Latest Trends and Updates in Real <br/> Estate Market
                             </p>
                             <button className='flex gap-2 text-start block text-[15px] text-[#EED26E] my-[10px]'>Read More <span className='min-w-[35px] mr-0.5'><img src="./image/Yellow-Arrow.svg"  className='!inline h-[10px]' alt="#" /></span></button>
                        </div>

                   </div>
                   
        </SwiperSlide>
                   )
                })}
 

 {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>

    </div>
  )
}



