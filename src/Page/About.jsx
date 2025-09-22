import React from 'react'
import { data2 } from '../data/Data2'
import Testimonial from '../Component/Testimonial'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export default function About() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once:true
    });
      AOS.refresh();
  }, []);

  
  
  
    return (
      <section className='overflow-x-hidden'>
          <section data-aos="fade-down" className='bg-[url("/image/background-about-page.svg")] h-[300px] flex items-center justify-center' >
               <div className='text-center'>
                   <h4 className='text-[38px] text-white'>Get to Know Us</h4>
                   <p className='mt-[30px] font-[18px] text-white px-2 '>We design, develop, and strategize to deliver valuable products.</p>
               </div>
       </section>
       <section data-aos="fade-up" className='h-auto xs:pb-8 xl:pb-0 xl:h-[726px] bg-[#F8F5F0]'>
              <div className='pt-[53px] text-center text-black'>
                         <h4 className='text-[16px]  '><span><img src="image/Black-Line.svg" className='inline mr-3' alt="line"/></span>Our Expertise<span><img src="image/Black-Line.svg" className='inline ml-3' alt="line"/></span></h4>
                         <p className='font-medium mt-[18px] text-[36px] px-2 xs:text-[25px] md:text-[30px] lg:text-[36px]'>Premier Housing and Construction Experts</p>
                   </div>
                   <div className=' flex xs:flex-col xm:flex-row flex-wrap justify-center xs:content-center xm:content-normal'>
                       {data2.slice(0, 4).map((value,index)=>
                              { return(
                                   <div className='xs:w-[90%] xm:w-[45%] px-[5%] mt-[70px] xs:text-center xm:text-start' >
                                    <h2 className='text-[30px] text-[#6D7175] mb-10 '>0{1+index}</h2>
                                    <img src="./image/Line-browns.svg" alt="#" className='xs:mx-auto xm:mx-0' />
                                    <h4 className='text-[21px] text-black mt-6'>Property Appointment</h4>
                                    <p className='text-[15px] text-[#9F9F9F] mt-[20px] leading-[25px]'>Creating a higher spacing and how people move through a unique<br/> 
                                    and impactful campaign.</p>
                                </div>

                               )}
                              

                       )}
                    </div>
       </section>
        <section className='h-auto lg:h-[490px] py-[30px]  px-2 flex justify-center xs:flex-col md:flex-row items-center xs:gap-[50px] md:gap-[50px] lg:gap-[109px]'>
               <div data-aos="fade-right" className='text-black md:max-w-[50%]  xs:text-center md:[text-align:unset]'>
                    <h2 className='xs:text-[30px] md:text-[31px] lg:text-[42px] xl:text-[40px]'>Our Vision & Mission</h2>
                    <p  className='xs:text-[16px] lg:text-[16px] xl:text-[18px] leading-[25px] xs:mt-[35px] lg:mt-[25px]  '>You are at the heart of everything we do. Your needs, desires, and goals guide our approach.<br className='xs:hidden 2xl:block'/> 
                        We listen carefully and move at a pace that suits you, never rushing or pushing unnecessary <br className='xs:hidden 2xl:block'/>
                    solutions.A</p>
                     <p className='xs:text-[16px] lg:text-[16px] xl:text-[18px] leading-[25px] mt-[15px] '>You are at the heart of everything we do. Your needs, desires, and goals guide our approach.<br className='xs:hidden 2xl:block'/> 
                        We listen carefully and move at a pace that suits you, never rushing or pushing unnecessary <br className='xs:hidden 2xl:block'/>
                    solutions.A</p>
                    <button className='text-[18px] mt-[27px] hover:border hover:border-[#bb902d] hover:p-3 hover:rounded-2xl'>Read More <img src="./image/ArrowBlack.svg " className='inline ml-2' alt="#" /></button>
               </div>
               <div data-aos="zoom-in">
                   <img src="./image/team-about-page.svg" alt="" />
               </div>

        </section>
        <section className='h-auto lg:h-[490px] pb-[30px]  px-2 flex justify-center xs:flex-col md:flex-row-reverse items-center xs:gap-[50px] md:gap-[50px] lg:gap-[109px]'>
               <div data-aos="fade-left" className='text-black md:max-w-[50%] xs:text-center md:[text-align:unset]'>
                    <h2 className='xs:text-[30px] md:text-[31px] lg:text-[42px] xl:text-[40px]'>Our Core Vision & Mission</h2>
                    <p  className='xs:text-[16px] lg:text-[16px] xl:text-[18px] leading-[25px] xs:mt-[35px] lg:mt-[25px] '>You are at the heart of everything we do. Your needs, desires, and goals guide our approach.<br className='xs:hidden 2xl:block'/> 
                        We listen carefully and move at a pace that suits you, never rushing or pushing unnecessary <br className='xs:hidden 2xl:block'/>
                    solutions.A</p>
                     <p className='xs:text-[16px] lg:text-[16px] xl:text-[18px] leading-[25px] mt-[15px] '>You are at the heart of everything we do. Your needs, desires, and goals guide our approach.<br className='xs:hidden 2xl:block'/> 
                        We listen carefully and move at a pace that suits you, never rushing or pushing unnecessary <br className='xs:hidden 2xl:block'/>
                    solutions.A</p>
                    <button className='text-[18px] mt-[27px] hover:border hover:border-[#bb902d] hover:p-3 hover:rounded-2xl'>Read More <img src="./image/ArrowBlack.svg " className='inline ml-2' alt="#" /></button>
               </div>
               <div data-aos="zoom-in">
                   <img src="./image/recent property-about-page.svg" alt="#" />
               </div>

        </section>
           <section data-aos="fade-down-right" className=' xs:h-auto flex flex-col align-middle '>
                <div className='mt-[0px] bg-[#F8F5F0] xs:py-[20px] px-2'>
                         <div className='  text-center'>
                              <h4 className='text-black xs:text-[30px] md:text-[40px] lg:text-[48px] '>Feedback from Our Customers</h4>
                              <h6 className='xs:text-[16px] sm:text-[18px] mt-[15px] text-black '>Realar makes it easy for you to build a real estate trading website. It comes with essential features like Registration,<br className='xs:hidden md:block'/> 
Login, and the ability to post real estate news</h6>
                         </div>
                     <div className='xs:mt-[40px] xm:mt-[50px] sm:mt-[50px]'>
                        <Testimonial className='!pb-0'/>
                    </div>   
                </div>
           
              </section>

      
      </section>
  )
}
