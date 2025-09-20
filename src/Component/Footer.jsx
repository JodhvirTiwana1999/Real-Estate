import React from 'react'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export default function Footer() {
      useEffect(() => {
    AOS.init({
      duration: 1000, 
      once:true
    });
      AOS.refresh();
  }, []);
     
 
    return (
    <section className='overflow-x-hidden'>
       <div  data-aos="fade-right" className='h-full mt-[35px] w-full flex xs:flex-col md:flex-row justify-between px-2'>
           <h4 className='text-center  xs:text-[26px] xm:text-[28px] md:text-[28px] lg:text-[32px] xl:text-[35px] max-text-[38px] xs:mb-7 md:mb-0'>Subscribe for the Latest Updates<br className='xs:hidden lg:block'/> 
and News</h4>
           <div className='text-white'>
                <form action="" className='flex flex-row'>
                      <input type="text" className='text-black  focus:outline-none focus:border-[#1c2d37] h-[64px] w-full max-w-[415px] placeholder:text-[18px] border border-black px-5 rounded-3xl' placeholder='Enter your Email'/><button className='w-[302px] h-[64px] bg-[#1C2D37] xs:text-[14px] md:text-[15px] lg:text-[18px] font-bold rounded-3xl ml-[11px]'>Subscribe Now <img src="./image/plane.svg" className='inline' alt="#" /></button>
                </form>
           </div>
           
       </div>
        <hr className=' border-1 bg-[#6D7175] border-[#6D7175] mt-[35px] text-white'/>
        <div  data-aos="fade-left" className='w-[100%] mt-11 mb-4 border-amber-400 flex xs:content-center md:content-normal xs:flex-col xm:flex-row flex-wrap xs:gap-8 xm:gap-0 justify-between px-2'>
               <div className='xs:max-w-[300px] xm:w-[50%] xm:max-w-[50%] sm:w-[50%] md:max-w-[41%] md:w-[33.33%] xm:text-[13px] sm:text-[15px]  lg:w-auto lg:max-w-none '>
                    <img src="./image/logo.svg" alt="#" />
                    <p className='xm:text-[13px] sm:text-[15px] px-1 text-[18px] leading-7 text-[#6D7175] mt-10 font-semibold'>
                        Stay updated with the latest real estate <br className='xs:hidden lg:block'/> news, new listings, market trends, and <br className='xs:hidden lg:block'/> valuable property insights here.
                    </p>
                      <ul className='flex sm:mt-3 md:mt-5 gap-4'>
                          <li className='list-none border-1 border-[#6D7175] p-3 rounded-4xl'><img src="./image/facebook.svg" alt="" /></li>
                          <li className='list-none border-1 border-[#6D7175] p-3 rounded-4xl'><img src="./image/instagram.svg" alt="" /></li>
                          <li className='list-none border-1 border-[#6D7175] p-3 rounded-4xl'><img src="./image/twitter.svg" alt="" /></li>
                          <li className='list-none border-1 border-[#6D7175] p-3 rounded-4xl'><img src="./image/youtube.svg" alt="" /></li>
                      </ul>
               </div>
               <div className='xs:max-w-[300px] xm:w-[50%] xm:max-w-[50%] sm:w-[50%] md:max-w-[41%] md:w-[33.33%] xm:text-[13px] sm:text-[15px] lg:w-auto lg:max-w-none '>
                    <h4 className='text-2xl font-semibold text-[#1C2D37]'>Get In Touch</h4>
                    <ul className=''>
                        <li className='text-[#6D7175] font-semibold text-4 mt-4 '> <img src="./image/location.svg" className='inline p-3 border-1 mr-2 rounded-3xl h-[40px] w-[40px]' alt="#" />1028 California USA</li>
                        <li className='text-[#6D7175] font-semibold text-4 mt-4 '><img src="./image/phone.svg" className='inline p-3 border-1 mr-2 rounded-3xl h-[40px] w-[40px]' alt="#" />+1 100001 0001 00</li>
                        <li className='text-[#6D7175] font-semibold text-4 mt-4 '><img src="./image/mail.svg" className='inline p-3 border-1 mr-2 rounded-3xl h-[40px] w-[40px]' alt="#" />infotechnothing@gamil.com</li>
                    </ul>
               </div>
               <div className='xs:max-w-[300px] xm:max-w-[50%] xm:w-[50%] sm:w-[50%] md:max-w-[18%] md:w-[33.33%] xm:mt-4 sm:mt-4 md:m-0 xm:text-[13px] sm:text-[15px] lg:w-auto lg:max-w-none '>
                     <h4 className='text-2xl font-semibold text-[#1C2D37]'>Useful Link</h4>
                    <ul className=''>
                        <li className='text-[#6D7175] font-semibold text-4 mt-4 hover:text-[#bb902d]'> <img src="./image/Greader-arrow.svg" className='inline  mr-2 ' alt="#" /><NavLink to='/'>Home</NavLink></li>
                        <li className='text-[#6D7175] font-semibold text-4 mt-4 hover:text-[#bb902d]'><img src="./image/Greader-arrow.svg" className='inline  mr-2 ' alt="#" /><NavLink to='/About'>About Us</NavLink> </li>
                        <li className='text-[#6D7175] font-semibold text-4 mt-4 hover:text-[#bb902d]'><img src="./image/Greader-arrow.svg" className='inline  mr-2 ' alt="#" /><NavLink to='/Service'>service</NavLink> </li>
                        <li className='text-[#6D7175] font-semibold text-4 mt-4 hover:text-[#bb902d]'><img src="./image/Greader-arrow.svg" className='inline  mr-2 ' alt="#" /><NavLink to='/Insights'>Blog</NavLink></li>
                        <li className='text-[#6D7175] font-semibold text-4 mt-4 hover:text-[#bb902d]'><img src="./image/Greader-arrow.svg" className='inline  mr-2 ' alt="#" /><NavLink to='/Contact'>Contact Us</NavLink></li>
                    </ul>

               </div>
        </div>
         <div className='bg-[#F8F5F0] w-full h-full px-2'>
            <div className='xs:h-[78px] xm:h-[69px] bg-[#F8F5F0] flex xs:py-4 xm:py-0 xs:gap-2 xm:gap-0 xs:flex-col xm:flex-row justify-between items-center px-2'>
                <h5 className='text-[14px] font-semibold text-[#6D7175]'>© 2025 Realar. All rights are reserved.</h5>
                <h5 className='text-[14px] font-semibold text-[#6D7175]'>Privacy & Policy <span className='text-[14px] font-semibold text-[#6D7175] mx-3'>|</span>Site Map</h5>
            </div>
       </div>
   </section>
  )
}
