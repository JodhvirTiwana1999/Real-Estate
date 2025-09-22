import React, { useState } from 'react'
import Pricecard from '../Component/Pricecard'
import { pricedata } from '../data/pircedata'
import { FaChevronDown } from "react-icons/fa6";
import { FAQ } from '../data/FAqdata';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Pricing() {
  let [Show,setshow] = useState(null)
useEffect(() => {
    AOS.init({
      duration: 1000, 
      once:true
    });
      AOS.refresh();
  }, []);


    return (
      <section>
             <div data-aos="fade-down" className='bg-[url("./image/background-about-page.svg")] h-[300px] flex items-center justify-center' >
               <div className='text-center text-white px-2'>
                   <h4 className='xs:text-[34px] xm:text-[38px]'>Pricing & Packages</h4>
                   <p className='mt-[30px]  text-[18px]'>Flexible, Affordable, Transparent, Customizable, Scalable</p>
               </div>
       </div>
         <div className='xl:h-[871px] xs:py-10 xl:py-0 px-2 w-full  bg-[#F8F5F0] flex justify-center items-center'>
             <div className='xl:w-[1276px] grid  lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xs:gap-[20px] sm:gap-[14px] '>
                    {
                        pricedata.map((value,index)=>{
                                 return(
                                        <div data-aos="zoom-out" key={index}>
                                           <Pricecard value={value}/>
                                        </div>
                                      )
                        })
                    }
             </div>
            
            
         </div>
         <div data-aos="fade-down" className='h-fit  py-2 bg-white'>
             <div className=' px-4'>
                <h4 className='text-[16px] pt-[42px] text-center text-black'><span><img src="/Real-Estate/public/image/Black-Line.svg" className='inline mr-3' alt="line"/></span>FAQ's<span><img src="/Real-Estate/public/image/Black-Line.svg" className='inline ml-3' alt="line"/></span></h4>
                    <h2 className='xs:text-[34px] sm:text-[39px] mt-[17px]  text-center text-black'>Frequently Asked Questions</h2>
                    <p className='font-medium mt-[17px] text-[18px] text-center text-black'>Have questions you want answers to?
                            </p>
            </div>
            {/* feq section  gap-24 hai  */}
            <div className='mt-[36px] flex flex-col justify-center items-center gap-[24px] xs:px-5 lg:px-0 py-5'>
                  {FAQ.map((value,index)=>{
                           return(
                                 <div data-aos="zoom-in-up" data-aos-duration="1500" key={index} className={`xs:w-full  lg:w-[1010px] xl:w-[1112px]   text-black  transition-all duration-500 ease-in-out overflow-hidden px-6 bg-white ${Show === value.id? "xs:h-auto lg:h-[136px]":"h-[68px]"}`} onClick={() => setshow(value.id)} style={{boxShadow: '1px 5px 20px #E1ECFE'}}   >
                                    <div className='h-[68px] flex justify-between items-center'>
                                    <h4 className='xs:text-[17px] xm:text-[22px]'>{value.title}</h4>
                                    <FaChevronDown className={`min-h-[20px] min-w-[20px] ${Show === value.id? 'rotate-180' : 'rotate-0'}`}/>
                                </div>
                                <p className={`xs:text-[15px] xm:text-[17px]  w-[90%] xs:pb-2 lg:pb-0 ${Show === value.id? 'block':'hidden'}`}>{value.pragraph}</p>
                                </div>
                           )
                  })}
                  
                  
            </div>
              
         </div>
      </section>
  )
}
