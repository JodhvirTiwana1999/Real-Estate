import React from 'react'
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { datap } from '../data/data-port'
import Card from '../Component/Card'
import { RiYoutubeLine } from 'react-icons/ri';
import { MdOutlineMail } from 'react-icons/md';
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
export default function Portfolio() {
      useEffect(() => {
    AOS.init({
      duration: 1000, 
      once:true
    });
      AOS.refresh();
  }, []);

  return (
         <section className='overflow-x-hidden'>
            <section data-aos="fade-down" className='bg-[url("./image/background-about-page.svg")] h-[300px] flex items-center justify-center' >
               <div className='text-center'>
                   <h4 className='xs:text-[30px] sm:text-[38px] text-white'>Explore Our Solution Portfolio</h4>
                   <p className='xs:mt-[22px] sm:mt-[30px] xs:font-[15px] sm:font-[18px] text-white'>Discover innovative solutions tailored to meet your needs.</p>
               </div>
            </section>
            <section>
                <div data-aos="fade-down" className='mt-[0px] bg-white '>
                                <div className='pt-[62px] px-4 text-center'>
                                    <h4 className='text-black xs:text-[30px] sm:text-[38px] xs:leading-10 sm:leading-17'>Explore Our Diverse Portfolio of Tailored Solutions</h4>
                                    <h6 className='px-4 xs:text-[15px] xm:text-[16px] sm:text-[19px] xs:mt-[22px] sm:mt-[31px] xs:leading-6 sm:leading-8 text-black'>Browse a variety of properties available for sale and purchase in the city,<br className='xs:hidden md:block'/> 
making it easy to find your ideal home</h6>
                                            </div>
                </div>
                   <div  className='flex flex-wrap bg-white justify-center xs:gap-[20px] xm:gap-[20px] sm:gap-[20px] md:gap-[20px] lg:gap-[30px] py-[30px] md:max-w-[932px] lg:max-w-[1260px] xl:max-w-none mx-auto'>
                           <div  data-aos="zoom-in-up" className='xs:w-[45%] xm:w-[45%] sm:w-[150px] md:w-[180px] lg:w-[243px] xl:w-[300px]  2xl:w-[330px]  relative group overflow-hidden'>
                                 <img src="./image/Portfolio/background-1.svg"   alt="#" />
                                 <div className=' text-white  absolute bg-gradient-to-b from-white/40 to-black h-[0%] w-full bottom-0 group-hover:h-full transition-all duration-1000 '>
                                     <div className='firstslide w-full   sm:mt-[3rem] md:mt-[4rem] lg:mt-[9rem] xl:mt-[14rem] px-2'>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold'>Architectural Consultation</h4>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold mt-[8px]'>USA</h4>
                                          <ul className='mt-[25px] flex xs:gap-5 sm:gap-1  md:gap-4 '>
                                              <li className=''>
                                                   <FaInstagram  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                              <li className=''>
                                                <FaXTwitter className='sm:text-[18px] hover:text-[#bb902b]' />
                                              </li>
                                              <li className=''>
                                                 <RiYoutubeLine  className='sm:text-[20px] hover:text-[#bb902b]' />

                                              </li>
                                              <li className=''>
                                                <MdOutlineMail  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                          </ul>
                                     </div>
                                 </div>
                           </div>
                           <div data-aos="zoom-in-up" className='xs:w-[45%] xm:w-[45%] sm:w-[278px] md:w-[333px] lg:w-[450px] xl:w-[557px] 2xl:w-[612px] relative group overflow-hidden'>
                                <img src="./image/Portfolio/background-2.svg" className='xs:h-[100%] sm:h-auto xs:object-cover sm:object-[unset]' alt="#" />
                                    <div className=' text-white absolute bg-gradient-to-b from-white/40 to-black h-[0%] w-full bottom-0 group-hover:h-full transition-all duration-1000 flex flex-row items-center'>
                                     <div className='firstslide hidden group-hover:block  w-full xs:mt-[13rem] sm:mt-[2rem] md:mt-[5rem] lg:mt-[9rem] xl:mt-[14rem] px-2 pb-1 flex flex-col sm:items-center'>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold sm:text-center'>Architectural Consultation</h4>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold mt-[8px] sm:text-center'>USA</h4>
                                         <ul className='xs:mt-[15px] sm:mt-[15px] md:mt-[15px] lg:mt-[25px] flex xs:gap-5 sm:gap-1  md:gap-4 sm:justify-center'>
                                              <li className=''>
                                                   <FaInstagram  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                              <li className=''>
                                                <FaXTwitter className='sm:text-[18px] hover:text-[#bb902b]' />
                                              </li>
                                              <li className=''>
                                                 <RiYoutubeLine  className='sm:text-[20px] hover:text-[#bb902b]' />

                                              </li>
                                              <li className=''>
                                                <MdOutlineMail  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                          </ul>
                                     </div>
                                 </div>
                           </div>
                           <div  data-aos="zoom-in-up"className='xs:w-[45%] xm:w-[45%] sm:w-[150px] md:w-[180px] lg:w-[243px] xl:w-[300px]  2xl:w-[330px]  relative group overflow-hidden'>
                                 <img src="./image/Portfolio/background-3.svg"   alt="#" />
                                 <div className=' text-white  absolute bg-gradient-to-b from-white/40 to-black h-[0%] w-full bottom-0 group-hover:h-full transition-all duration-1000 '>
                                     <div className='firstslide w-full   sm:mt-[3rem] md:mt-[4rem] lg:mt-[9rem] xl:mt-[14rem] px-2'>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold'>Architectural Consultation</h4>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold mt-[8px]'>USA</h4>
                                          <ul className='mt-[25px] flex xs:gap-5 sm:gap-1  md:gap-4 '>
                                              <li className=''>
                                                   <FaInstagram  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                              <li className=''>
                                                <FaXTwitter className='sm:text-[18px] hover:text-[#bb902b]' />
                                              </li>
                                              <li className=''>
                                                 <RiYoutubeLine  className='sm:text-[20px] hover:text-[#bb902b]' />

                                              </li>
                                              <li className=''>
                                                <MdOutlineMail  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                          </ul>
                                     </div>
                                 </div>
                           </div>
                        <div data-aos="zoom-in-up" className='xs:w-[45%] xm:w-[45%] sm:w-[278px] md:w-[333px] lg:w-[450px] xl:w-[557px] 2xl:w-[612px] relative group overflow-hidden'>
                                <img src="./image/Portfolio/background-4.svg" className='xs:h-[100%] sm:h-auto xs:object-cover sm:object-[unset]' alt="#" />
                                    <div className=' text-white absolute bg-gradient-to-b from-white/40 to-black h-[0%] w-full bottom-0 group-hover:h-full transition-all duration-1000 flex flex-row items-center'>
                                     <div className='firstslide hidden group-hover:block  w-full xs:mt-[13rem] sm:mt-[2rem] md:mt-[5rem] lg:mt-[9rem] xl:mt-[14rem] px-2 pb-1 flex flex-col sm:items-center'>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold sm:text-center'>Architectural Consultation</h4>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold mt-[8px] sm:text-center'>USA</h4>
                                         <ul className='xs:mt-[15px] sm:mt-[15px] md:mt-[15px] lg:mt-[25px] flex xs:gap-5 sm:gap-1  md:gap-4 sm:justify-center'>
                                              <li className=''>
                                                   <FaInstagram  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                              <li className=''>
                                                <FaXTwitter className='sm:text-[18px] hover:text-[#bb902b]' />
                                              </li>
                                              <li className=''>
                                                 <RiYoutubeLine  className='sm:text-[20px] hover:text-[#bb902b]' />

                                              </li>
                                              <li className=''>
                                                <MdOutlineMail  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                          </ul>
                                     </div>
                                 </div>
                           </div>
                      <div data-aos="zoom-in-up" className='xs:w-[45%] xm:w-[45%] sm:w-[150px] md:w-[180px] lg:w-[243px] xl:w-[300px]  2xl:w-[330px]  relative group overflow-hidden'>
                                 <img src="./image/Portfolio/background-5.svg"   alt="#" />
                                 <div className=' text-white  absolute bg-gradient-to-b from-white/40 to-black h-[0%] w-full bottom-0 group-hover:h-full transition-all duration-1000 '>
                                     <div className='firstslide w-full   sm:mt-[3rem] md:mt-[4rem] lg:mt-[9rem] xl:mt-[14rem] px-2'>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold'>Architectural Consultation</h4>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold mt-[8px]'>USA</h4>
                                          <ul className='mt-[25px] flex xs:gap-5 sm:gap-1  md:gap-4 '>
                                              <li className=''>
                                                   <FaInstagram  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                              <li className=''>
                                                <FaXTwitter className='sm:text-[18px] hover:text-[#bb902b]' />
                                              </li>
                                              <li className=''>
                                                 <RiYoutubeLine  className='sm:text-[20px] hover:text-[#bb902b]' />

                                              </li>
                                              <li className=''>
                                                <MdOutlineMail  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                          </ul>
                                     </div>
                                 </div>
                           </div>
                  <div data-aos="zoom-in-up" className='xs:w-[45%] xm:w-[45%] sm:w-[150px] md:w-[180px] lg:w-[243px] xl:w-[300px]  2xl:w-[330px]  relative group overflow-hidden'>
                                 <img src="./image/Portfolio/background-6.svg"   alt="#" />
                                 <div className=' text-white  absolute bg-gradient-to-b from-white/40 to-black h-[0%] w-full bottom-0 group-hover:h-full transition-all duration-1000 '>
                                     <div className='firstslide w-full   sm:mt-[3rem] md:mt-[4rem] lg:mt-[9rem] xl:mt-[14rem] px-2'>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold'>Architectural Consultation</h4>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold mt-[8px]'>USA</h4>
                                          <ul className='mt-[25px] flex xs:gap-5 sm:gap-1  md:gap-4 '>
                                              <li className=''>
                                                   <FaInstagram  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                              <li className=''>
                                                <FaXTwitter className='sm:text-[18px] hover:text-[#bb902b]' />
                                              </li>
                                              <li className=''>
                                                 <RiYoutubeLine  className='sm:text-[20px] hover:text-[#bb902b]' />

                                              </li>
                                              <li className=''>
                                                <MdOutlineMail  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                          </ul>
                                     </div>
                                 </div>
                           </div>
     <div data-aos="zoom-in-up" className='xs:w-[45%] xm:w-[45%] sm:w-[150px] md:w-[180px] lg:w-[243px] xl:w-[300px]  2xl:w-[330px]  relative group overflow-hidden'>
                                 <img src="./image/Portfolio/background-7.svg"   alt="#" />
                                 <div className=' text-white  absolute bg-gradient-to-b from-white/40 to-black h-[0%] w-full bottom-0 group-hover:h-full transition-all duration-1000 '>
                                     <div className='firstslide w-full   sm:mt-[3rem] md:mt-[4rem] lg:mt-[9rem] xl:mt-[14rem] px-2'>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold'>Architectural Consultation</h4>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold mt-[8px]'>USA</h4>
                                          <ul className='mt-[25px] flex xs:gap-5 sm:gap-1  md:gap-4 '>
                                              <li className=''>
                                                   <FaInstagram  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                              <li className=''>
                                                <FaXTwitter className='sm:text-[18px] hover:text-[#bb902b]' />
                                              </li>
                                              <li className=''>
                                                 <RiYoutubeLine  className='sm:text-[20px] hover:text-[#bb902b]' />

                                              </li>
                                              <li className=''>
                                                <MdOutlineMail  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                          </ul>
                                     </div>
                                 </div>
                           </div>
                 <div data-aos="zoom-in-up" className='xs:w-[45%] xm:w-[45%] sm:w-[150px] md:w-[180px] lg:w-[243px] xl:w-[300px]  2xl:w-[330px]  relative group overflow-hidden'>
                                 <img src="./image/Portfolio/background-8.svg"   alt="#" />
                                 <div className=' text-white  absolute bg-gradient-to-b from-white/40 to-black h-[0%] w-full bottom-0 group-hover:h-full transition-all duration-1000 '>
                                     <div className='firstslide w-full   sm:mt-[3rem] md:mt-[4rem] lg:mt-[9rem] xl:mt-[14rem] px-2'>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold'>Architectural Consultation</h4>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold mt-[8px]'>USA</h4>
                                          <ul className='mt-[25px] flex xs:gap-5 sm:gap-1  md:gap-4 '>
                                              <li className=''>
                                                   <FaInstagram  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                              <li className=''>
                                                <FaXTwitter className='sm:text-[18px] hover:text-[#bb902b]' />
                                              </li>
                                              <li className=''>
                                                 <RiYoutubeLine  className='sm:text-[20px] hover:text-[#bb902b]' />

                                              </li>
                                              <li className=''>
                                                <MdOutlineMail  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                          </ul>
                                     </div>
                                 </div>
                           </div>
                             <div data-aos="zoom-in-up" className='xs:w-[90%] xm:w-[90%] sm:w-[278px] md:w-[333px] lg:w-[450px] xl:w-[557px] 2xl:w-[612px] relative group overflow-hidden'>
                                <img src="./image/Portfolio/background-9.svg" className='xs:h-[100%] sm:h-auto xs:object-cover sm:object-[unset]' alt="#" />
                                    <div className=' text-white absolute bg-gradient-to-b from-white/40 to-black h-[0%] w-full bottom-0 group-hover:h-full transition-all duration-1000 flex flex-row items-center'>
                                     <div className='firstslide hidden group-hover:block  w-full xs:mt-[13rem] sm:mt-[2rem] md:mt-[5rem] lg:mt-[9rem] xl:mt-[14rem] px-2 pb-1 flex flex-col sm:items-center'>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold text-center'>Architectural Consultation</h4>
                                          <h4 className='sm:text-[16px] md:text-[20px] font-semibold mt-[8px] text-center'>USA</h4>
                                         <ul className='xs:mt-[15px] sm:mt-[15px] md:mt-[15px] lg:mt-[25px] flex xs:gap-5 sm:gap-1  md:gap-4 justify-center'>
                                              <li className=''>
                                                   <FaInstagram  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                              <li className=''>
                                                <FaXTwitter className='sm:text-[18px] hover:text-[#bb902b]' />
                                              </li>
                                              <li className=''>
                                                 <RiYoutubeLine  className='sm:text-[20px] hover:text-[#bb902b]' />

                                              </li>
                                              <li className=''>
                                                <MdOutlineMail  className='sm:text-[20px] hover:text-[#bb902b]'/>
                                              </li>
                                          </ul>
                                     </div>
                                 </div>
                           </div>
                   </div>           
            </section>
   {/* this is complete-project-section */}
    <section>
                    <div data-aos="zoom-out" className='mt-[0px] bg-white px-2'>
                                    <div className='xs:pt-[30px] sm:pt-[62px]  text-center'>
                                        <h4 className='text-black xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] '>Explore Our Diverse Range of Completed Projects</h4>
                                        <h6 className='text-[19px] xs:mt-[22px] sm:mt-[25px] md:mt-[28px] lg:mt-[31px] leading-8 text-black'>Explore our wide variety of successfully completed projects, showcasing quality design, innovation, and tailored<br className='xs:hidden lg:block'/> 
                                             solutions for every client</h6>
                                    </div>
                    </div>
                    <div  className='pt-[10px]  bg-white text-black'>
                              <div className='grid md:gap-[40px] sm:gap-[30px] xs:gap-[30px] lg:gap-[20px] xl:gap-[49px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto xs:mt-[30px] sm:mt-[68px]'>
                                  {
                                    datap.map((value,index)=>{
                                          return(
                                            <div data-aos="zoom-in-up" key={index}>
                                               <Card data={value}/>
                                            </div>
                                          )
                                    })
                                  }
                              </div>
                    </div>
                    
                                    



        </section>
        <section>
              <div className='mt-[0px] bg-white pb-[21px]'>
                                    <div className='pt-[62px]  text-center px-2'>
                                        <h4 className='text-black xs:text-[28px] sm:text-[28px] md:text-[32px] lg:text-[38px] '>Before & After  Amazing Transformations</h4>
                                        <h6 className='xs:text-[18px] md:text-[19px] mt-[31px] leading-8 text-black'>Explore incredible transformations through before and after comparisons, showcasing the impactful changes<br className='xs:hidden lg:block'/> 
  and improvements in every project.</h6>
                                    </div>
                    </div>
                    {/* this is after and before section  */}
      <div className='h-auto bg-[#FFFAFA] md:px-[30px] lg:px-[60px] md:py-[37px] lg:py-[57px] flex xs:flex-col sm:flex-row xs:gap-[40px] sm:gap-[10px] md:gap-[50px] lg:gap-[80px] xs:py-5 sm:py-0'>
            <div data-aos="zoom-in-right" className=' sm:max-w-[600px] bg-transparent flex-col  text-black gap-[67px] px-3  '>
                    <div className='w-[100%] flex flex-col items-center justify-center'>
                        <img src="/image/Portfolio/After.svg" alt="about"/>
                        <h2 className='mt-[19px] text-[39px]'>Before</h2>
                    </div>
                <div className=' flex flex-col justify-center xs:mt-[50px] lg:mt-[65px]'>
                        <h2 className='xs:text-[25px] sm:text-[22px] md:text-[22px] lg:text-[28px] xl:text-[32px] text-center'>Pre-Construction Home Overview</h2>
                        <p className='text-[18px] leading-[28px] mt-[27px] '>
                            Bring your dream home to life with custom designs crafted by expert architects. We tailor every detail to match your unique style, needs, and vision, ensuring a perfect balance of functionality and beauty in every space of your home
                        </p>
                        <p className='text-[18px] leading-[28px] mt-[27px] '>
                            Transform your vision into reality with bespoke home designs by expert architects. Every aspect is personalized to reflect your style, requirements, and aspirations, creating a harmonious blend of practicality and elegance in every room of your home
                        </p>
                         <p className='text-[18px] leading-[28px] mt-[27px] '>
                            Transform your vision into reality with bespoke home designs by expert architects. Every aspect is personalized to reflect your style, requirements, and aspirations, creating a harmonious blend of practicality and elegance in every room of your home
                        </p>
                </div>
            </div>
             <div data-aos="zoom-in-left" className=' sm:max-w-[600px] bg-transparent flex-col  text-black gap-[67px] px-3  '>
                    <div className='w-[100%] flex flex-col items-center justify-center'>
                        <img src="/image/Portfolio/Before.svg" alt="about"/>
                         <h2 className='mt-[19px] text-[39px]'>After</h2>
                    </div>
                <div className=' flex flex-col justify-center xs:mt-[50px] lg:mt-[65px]'>
                        <h2 className='xs:text-[25px] sm:text-[22px] md:text-[22px] lg:text-[28px] xl:text-[32px] text-center'>Post-Construction Home Overview</h2>
                        <p className='text-[18px] leading-[28px] mt-[27px] '>
                            Bring your dream home to life with custom designs crafted by expert architects. We tailor every detail to match your unique style, needs, and vision, ensuring a perfect balance of functionality and beauty in every space of your home
                        </p>
                        <ul className='grid'>
                         <li className='text-[18px] mt-[35px] truncate w-[100%] '><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Final inspections to ensure quality and safety</li>
                         <li className='text-[18px] mt-[25px] truncate w-[100%]'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Completion of finishing details like painting and flooring</li>
                         <li className='text-[18px] mt-[25px] truncate w-[100%]'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Ensuring all systems (plumbing, electrical, etc.) are fully functional</li>
                         <li className='text-[18px] mt-[25px] truncate w-[100%]'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Landscaping and exterior enhancements for curb appeal</li>
                         
                    </ul>
                </div>
            </div>

      </div>
 

        </section>
         </section>
  )
}
