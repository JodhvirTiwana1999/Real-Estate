import React, { useRef } from 'react'
import Slider4 from '../Component/Slider4'
import Sliders5 from '../Component/slider_5'
import Card2 from '../Component/Card2';
import { datainsight } from '../data/data-insight';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export default function Insights() {
  
    const swiperRef = useRef(null);
  
    const handlePrev = () => {
      if (swiperRef.current) swiperRef.current.slidePrev();
    };
  
    const handleNext = () => {
      if (swiperRef.current) swiperRef.current.slideNext();
    };
  
  
useEffect(() => {
    AOS.init({
      duration: 1000, 
      once:true
    });
      AOS.refresh();
  }, []);

  
    return (
       <section className='overflow-x-hidden'>
          <section data-aos="fade-down" className='bg-[url("./image/background-about-page.svg")] h-[300px] flex items-center justify-center ' >
               <div className='text-center text-white px-2'>
                   <h4 className='xs:text-[28px] xm:text-[38px]'>Explore Our Service Insights</h4>
                   <p className='mt-[30px] xs:font-[15px] xm:font-[18px]'>Uncover Customized Solutions Designed for You.</p>
               </div>
            </section>
                
                
    <section className='xs:h-full  lg:h-[810px]  w-full bg-[#f8f5f0] text-black  xs:py-[36px] lg:pt-[36px]'>
      <div data-aos="fade-right" className='flex justify-between px-3 sm:flex-row xs:flex-col sm:text-left xs:text-center'>
                   <div className='main'>
                         <h4 className='text-[16px] pt-[42px] '><span><img src="../public/image/Black-Line.svg" className='inline mr-3' alt="line"/></span>News & Blog<span><img src="../public/image/Black-Line.svg" className='inline ml-3' alt="line"/></span></h4>
                          <h2 className='xs:text-[32px] sm:text-[32px] md:text-[38px] lg:text-[48px] mt-[18px] font-light'>Recent Blog</h2>
                          <p className='font-medium mt-[13px] sm:text-[13px] md:text-[15px] lg:text-[18px]'>Collaboration Between Architects and Engineers for <br className='xs:hidden xm:block'/>
                           Transforming Concepts into Structures.</p>
                   </div>
                   <div className='flex gap-3 items-center pt-[40px] sm:justify-normal xs:justify-center'>
                       <button onClick={handlePrev} className='bg-black h-[45px] w-[45px] rounded-[50px] rotate-[180deg] flex items-center justify-center'>
                             <img src="image/ArrowWhite.svg"  className='inline' alt="#" /> 
                       </button>
                       <button onClick={handleNext} className='bg-black h-[45px] w-[45px] rounded-[50px] flex items-center justify-center'>
                             <img src="image/ArrowWhite.svg"  className='inline' alt="#" /> 
                       </button>
                   </div>
              </div>
                        
{/* this is testimonials */}
                      <div data-aos="zoom-out" data-aos-duration="1500" className='mt-[49px]'>
                           <Slider4 swiperRef={swiperRef} />
                      </div>
                        
    </section>

    <section className='overflow-x-hidden h-full py-[25px] bg-white mt-0 text-black'>
          <section className='h-full w-full'>
                   <div data-aos="fade-down" className='text-center pb-[70px] px-2'>
                       <h2 className='xs:text-[35px] xm:text-[42px] sm:text-[48px] pt-[14px] font-light'>Explore Our Services</h2>
                       <h4 className='text-[18px] mt-[27px]'>Architects and engineers work together to transform conceptsinto practical structures.</h4>
                   </div>
                   <div data-aos="zoom-out" className='grid w-full px-5 xs:gap-[40px] sm:gap-[20px] lg:gap-[25px] xl:gap-[49px] xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto'>
                         {datainsight.map((value,index)=>{
                                 return(
                                           <div   key={index}>
                                               <Card2 value={value}/>
                                           </div>
                                       )
                         })}
                   </div>
            </section>
     
            
               
            
    </section>
          
       </section>
  )
}
