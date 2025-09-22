import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../App.css'
// import required modules
import { Parallax, Pagination, Navigation,Autoplay } from 'swiper/modules';

export default function Sliders5() {
  return (
    <div className="relative">
      {/* 🔁 Custom navigation buttons outside Swiper */}
      <button className="w-[48px] h-[48px] rounded-[20px] border-1 p-2 bg-black border-white custom-swiper-button-prev-1  slider_5_button_left absolute left-0 top-1/2 z-10 transform -translate-y-1/2">
        <img src="image/ArrowWhite.svg" className='rotate-180' alt="Previous" />
      </button>
      <button className="w-[48px] h-[48px] rounded-[20px] p-2 border-1 border-white bg-black custom-swiper-button-next-1  slider_5_button_right absolute right-0 top-1/2 z-10 transform -translate-y-1/2">
        <img src="image/ArrowWhite.svg"  alt="Next" />
      </button>

      <Swiper
        navigation={{
          nextEl: '.custom-swiper-button-next-1',
          prevEl: '.custom-swiper-button-prev-1',
        }}
        modules={[Parallax, Navigation,Autoplay]}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
         delay: 3000,
         disableOnInteraction: false,
        }}
        loop={true}

        speed={600}
        parallax={true}
        pagination={{ clickable: true }}
        className="mySwiper max-h-[596px] h-[596px] !py-0 text-white"
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
        <SwiperSlide className="!flex flex-col items-center justify-center gap-[16px]"
          style={{
            backgroundImage: 'url("image/background.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
          }}
        >
          <div className="title leading-10 xs:text-[25px] xm:text-[30px] sm:text-[35px] md:text-[40px] lg:text-[60px] px-2">Embrace the Future of Custom Homes</div> 
          <div >
            <p className="subtitle w-[60vw] leading-[22px] text-[16px] max-w-[800px]">
            Real estate involves buying, selling, or renting properties such as homes, commercial buildings, and land. It includes market analysis, investment opportunities, and legal procedures for property transactions and development
             </p>
          </div>
          <div className="text">
            <button className="border items-center border-amber-50 text-white text-[16px] w-[183px] h-[51px] bg-transparent rounded-[30px] px-[8px] py-[16px] flex gap-[10px] justify-center">
              Request a Visit
              <span className="max-w-[24px] max-h-[20px] flex justify-center ">
                <img src="image/ArrowWhite.svg"  alt="Arrow" />
              </span>
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 & 3 */}
       <SwiperSlide className="!flex flex-col items-center justify-center gap-[16px]"
          style={{
            backgroundImage: 'url("image/background-home-2.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
          }}
        >
          <div className="title leading-10 xs:text-[25px] xm:text-[30px] sm:text-[35px] md:text-[40px] lg:text-[60px] px-2">Embrace the Future of Custom Homes</div> 
          <div >
            <p className="subtitle w-[60vw] leading-[22px] text-[16px] max-w-[800px]">
            Real estate involves buying, selling, or renting properties such as homes, commercial buildings, and land. It includes market analysis, investment opportunities, and legal procedures for property transactions and development
             </p>
          </div>
          <div className="text">
            <button className="border items-center border-amber-50 text-white text-[16px] w-[183px] h-[51px] bg-transparent rounded-[30px] px-[8px] py-[16px] flex gap-[10px] justify-center">
              Request a Visit
              <span className="max-w-[24px] max-h-[20px] flex justify-center ">
                <img src="image/ArrowWhite.svg"  alt="Arrow" />
              </span>
            </button>
          </div>
        </SwiperSlide>

      <SwiperSlide className="!flex flex-col items-center justify-center gap-[16px]"
          style={{
            backgroundImage: 'url("image/background-home-3.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
          }}
        >
          <div className="title leading-10 xs:text-[25px] xm:text-[30px] sm:text-[35px] md:text-[40px] lg:text-[60px] px-2">Embrace the Future of Custom Homes</div> 
          <div >
            <p className="subtitle w-[60vw] leading-[22px] text-[16px] max-w-[800px]">
            Real estate involves buying, selling, or renting properties such as homes, commercial buildings, and land. It includes market analysis, investment opportunities, and legal procedures for property transactions and development
             </p>
          </div>
          <div className="text">
            <button className="border items-center border-amber-50 text-white text-[16px] w-[183px] h-[51px] bg-transparent rounded-[30px] px-[8px] py-[16px] flex gap-[10px] justify-center">
              Request a Visit
              <span className="max-w-[24px] max-h-[20px] flex justify-center ">
                <img src="image/ArrowWhite.svg"  alt="Arrow" />
              </span>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
