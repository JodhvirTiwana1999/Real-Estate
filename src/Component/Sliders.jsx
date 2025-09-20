import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css'
// import required modules
import { Parallax, Pagination, Navigation,Autoplay } from 'swiper/modules';

export default function Sliders() {
  return (
    <div className="relative max-w-[1440px] w-full ">
      {/* 🔁 Custom navigation buttons outside Swiper */}
      <button className="w-[48px] h-[48px] rounded-[20px] p-2 bg-amber-50 custom-swiper-button-prev absolute left-4 top-1/2 z-10 transform -translate-y-1/2">
        <img src="/image/ArrowBlack.svg" className='rotate-180' alt="Previous" />
      </button>
      <button className="w-[48px] h-[48px] rounded-[20px] p-2  bg-amber-50 custom-swiper-button-next absolute right-4 top-1/2 z-10 transform -translate-y-1/2">
        <img src="/image/ArrowBlack.svg"  alt="Next" />
      </button>

      <Swiper
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        modules={[Parallax, Navigation,Autoplay]}
        autoplay={{
           delay: 3000,      
    disableOnInteraction: false,
        }}
        loop={true}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{ clickable: true }}
        className="mySwiper max-h-[767px] h-[767px] !p-0 "
      >
        {/* Background parallax image */}
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: 'url("/image/logo.svg")',
          }}
          data-swiper-parallax="-23%"
        ></div>

        {/* Slide 1 */}
        <SwiperSlide className="!flex flex-col items-center justify-center gap-[16px] "
          style={{
            backgroundImage: 'url("/image/background.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
          }}
        >
          <div className="title xl:text-[3.75rem] lg:text-[2.5rem]  sm:text-[1.87rem] xm:text-[1.75rem] xs:text-[1.50rem] mt-10 text-white" >Embrace the Future of Custom Homes</div> 
          <div >
            <p className="subtitle w-[60vw] leading-[22px] text-[16px] max-w-[800px] text-white">
            Real estate involves buying, selling, or renting properties such as homes, commercial buildings, and land. It includes market analysis, investment opportunities, and legal procedures for property transactions and development
             </p>
          </div>
          <div className="text">
            <button className="border border-amber-50 text-white text-[16px] w-[183px] h-[51px] bg-transparent rounded-[30px] px-[8px] py-[16px] flex gap-[10px] justify-center items-center">
              Request a Visit
              <span className="max-w-[24px] max-h-[20px] flex justify-center ">
                <img src="/image/ArrowWhite.svg"  alt="Arrow" />
              </span>
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 & 3 */}
            <SwiperSlide className="!flex flex-col items-center justify-center gap-[16px] "
          style={{
            backgroundImage: 'url("/image/background-home-2.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
          }}
        >
          <div className="title xl:text-[3.75rem] lg:text-[2.5rem]  sm:text-[1.87rem] xm:text-[1.75rem] xs:text-[1.50rem] mt-10 text-white" >Embrace the Future of Custom Homes</div> 
          <div >
            <p className="subtitle w-[60vw] leading-[22px] text-[16px] max-w-[800px] text-white">
            Real estate involves buying, selling, or renting properties such as homes, commercial buildings, and land. It includes market analysis, investment opportunities, and legal procedures for property transactions and development
             </p>
          </div>
          <div className="text">
            <button className="border border-amber-50 text-white text-[16px] w-[183px] h-[51px] bg-transparent rounded-[30px] px-[8px] py-[16px] flex gap-[10px] justify-center items-center">
              Request a Visit
              <span className="max-w-[24px] max-h-[20px] flex justify-center ">
                <img src="/image/ArrowWhite.svg"  alt="Arrow" />
              </span>
            </button>
          </div>
        </SwiperSlide>

        {/* slides 3 */}

         <SwiperSlide className="!flex flex-col items-center justify-center gap-[16px] "
          style={{
            backgroundImage: 'url("/image/background-home-3.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
          }}
        >
          <div className="title xl:text-[3.75rem] lg:text-[2.5rem]  sm:text-[1.87rem] xm:text-[1.75rem] xs:text-[1.50rem] mt-10 text-white" >Embrace the Future of Custom Homes</div> 
          <div >
            <p className="subtitle w-[60vw] leading-[22px] text-[16px] max-w-[800px] text-white">
            Real estate involves buying, selling, or renting properties such as homes, commercial buildings, and land. It includes market analysis, investment opportunities, and legal procedures for property transactions and development
             </p>
          </div>
          <div className="text">
            <button className="border border-amber-50 text-white text-[16px] w-[183px] h-[51px] bg-transparent rounded-[30px] px-[8px] py-[16px] flex gap-[10px] justify-center items-center">
              Request a Visit
              <span className="max-w-[24px] max-h-[20px] flex justify-center ">
                <img src="/image/ArrowWhite.svg"  alt="Arrow" />
              </span>
            </button>
          </div>
        </SwiperSlide>
   
      
      </Swiper>
    </div>
  );
}
