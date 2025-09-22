import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faHouse  } from '@fortawesome/free-regular-svg-icons';
import { LuPhone } from 'react-icons/lu';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
    AOS.init({
      duration: 1000, 
      once:true
    });
      AOS.refresh();
  }, []);

  return (
    <section className=' h-full h-fit px-5 py-14 w-full py-19 bg-[url("/image/Contact/background.svg")] bg-no-repeat bg-cover flex xs:flex-col sm:flex-row justify-center xs:gap-[60px] sm:gap-[30px] md:gap-[50px] lg:gap-[40px] xl:gap-[120px]'>
           <div data-aos="fade-right" className='xs:w-[100%] sm:w-[45%] lg:w-auto h-full'>
               <h2 className=' text-white lg:text-[46px] md:text-[35px] sm:text-[30px] xs:text-[32px] xs:text-center sm:text-left'>Contact Infomation</h2>
                <div className='flex gap-6 mt-[42px] xs:justify-center sm:justify-normal'>
                    <div className='border-1 p-3 outline-0 rounded-4xl hover:text-[#FFDD65] group'>
                        <FontAwesomeIcon icon={faHouse} className='text-white text-[29px] group-hover:text-[#FFDD65]' />
                    </div>
                    <div>
                          <h4 className='text-[20px] text-white'>Our Address</h4>
                          <p className='text-[16px] text-white'>2690 Hiltona Street Victoria<br/><span className='mt-[11px]'>Road, New York, Canada</span></p>
                    </div>
                </div>
                <div className='flex gap-6 mt-[94px] xs:justify-center sm:justify-normal'>
                    <div className='border-1 p-3 outline-0 rounded-4xl flex items-center group hover:text-[#FFDD65]'>
                        
                         <FontAwesomeIcon icon={faEnvelope} className='text-white text-[29px] group-hover:text-[#FFDD65]'/>
                    </div>
                    <div>
                          <h4 className='text-[20px] text-white'>Our Email</h4>
                          <p className='text-[16px] text-white'>2690 Hiltona Street Victoria<br/><span className='mt-[11px]'>Road, New York, Canada</span></p>
                    </div>
                </div>
                <div className='flex gap-6 mt-[94px] xs:justify-center sm:justify-normal '>
                    <div className='border-1 p-3 outline-0 rounded-4xl flex items-center group hover:text-[#FFDD65]'>
                         {/* <img src="image/Contact/Phone.svg" className='border-1 p-3 outline-0 rounded-4xl group-hover:text-[#FFDD65]' alt="#" /> */}
                         <LuPhone className='text-white text-[29px] group-hover:text-[#FFDD65]' />
                     </div>
                    <div>
                          <h4 className='text-[20px] text-white'>Our Contact</h4>
                          <p className='text-[16px] text-white'>2690 Hiltona Street Victoria<br/><span className='mt-[11px]'>Road, New York, Canada</span></p>
                    </div>
                </div>
           </div>
           {/* This is second contact-2 */}
           <div data-aos="fade-left" className='xs:w-[100%] sm:w-[45%] lg:w-auto h-full'>
                <h2 className='text-white lg:text-[46px] md:text-[35px] sm:text-[30px] xs:text-[32px] xs:text-center sm:text-left'>Schedule a visit</h2>
               <div className='mt-[42px] '>
                     <form action="#" className='flex flex-col gap-[14px]'>
                           <input type="text" placeholder='Your Name*' name='Name' required className='bg-transparent lg:w-[556px] h-[64px] border-2 placeholder:text-[18px] text-white placeholder:text-white rounded-3xl px-10 focus:outline-0  ' /><br/>
                           <input type="text" placeholder='Your Email*' name='Name' required className='bg-transparent lg:w-[556px] h-[64px] border-2 placeholder:text-[18px] text-white placeholder:text-white rounded-3xl px-10 focus:outline-0  ' /><br/>
                           <input type="text" placeholder='Your Contact*' name='Name' required className='bg-transparent lg:w-[556px] h-[64px] border-2 placeholder:text-[18px] text-white placeholder:text-white rounded-3xl px-10 focus:outline-0  ' /><br/>
                           <textarea  placeholder='Your Massage*' name='Name' required className='bg-transparent lg:w-[556px] h-[143px] border-2 placeholder:text-[18px] text-white placeholder:text-white rounded-3xl px-10 focus:outline-0  pt-3'/><br/>
                          <button type='submit' className='xs:mx-auto sm:mx-0 text-white border hover:border-[#FFDD65] w-[222px] p-3 h-[68px] text-[18px] font-bold rounded-3xl hover:text-[#FFDD65] flex items-center group justify-center' >Submit Messge  <FontAwesomeIcon icon={faPaperPlane} className="  text-white group-hover:text-[#FFDD65] ml-4 w-[20px] h-[20px]" /></button>
                      
                     </form>
               </div>
          </div>
    </section>
  )
}
