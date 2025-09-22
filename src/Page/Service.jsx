import React from 'react'
   import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
  
export default function Service() {
   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once:true
    });
      AOS.refresh();
  }, []);

  
  
     return (
      <>
          <section data-aos="fade-down" className='bg-[url("image/background-about-page.svg")] h-[300px] flex items-center justify-center text-white px-2' >
               <div className='text-center'>
                   <h4 className='xs:text-[30px] xm:text-[38px] '>Our Service Solution</h4>
                   <p className='xs:mt-[25px] xm:mt-[30px] font-[18px]'>We design, develop, and strategize to deliver valuable products.</p>
               </div>
       </section>
       {/* this is top section for service */}
         <div className='pt-6 xs:block sm:hidden text-center'>
                <h4 className='xs:block sm:hidden xs-text-[23px] text-[16px] sm:mt-[20px]  lg:mt-[42px] min-w-[180px]'><span><img src="image/Line-about.svg" className='inline mr-3' alt="line"/></span>Services<span><img src="image/Line-about.svg" className='inline ml-3' alt="line"/></span></h4>
         </div>
       <section data-aos="fade-left" className='xs:h-auto xs:py-4 lg:py-8 lg:h-[572px] bg-[#FFFAFA] flex text-black sm:gap-[20px] md:gap-[50px] lg:gap-[90px] px-3 xs:flex-col sm:flex-row-reverse '>
             <div className='xs:w-[100%] sm:w-[50%] flex items-center justify-center'>
                    <img src="image/Service/background-1.svg" className='sm:min-w-[260px] md:min-w-[350px]' alt="about"/>
               </div>
               <div data-aos="fade-right" className='xs:w-[100%] sm:w-[50%] '>
                      <h4 className='xs:hidden sm:block text-[16px] sm:mt-[20px] lg:mt-[42px] min-w-[180px] sm:mb-[8px]'><span><img src="/Real-Estate/public/image/line-about.svg" className='inline mr-3' alt="line"/></span>Services<span><img src="/Real-Estate/public/image/line-about.svg" className='inline ml-3' alt="line"/></span></h4>
                      <h2 className=' xs:text-center sm:[text-align:unset;] xs:text-[25px] xs:mt-[25px] sm:mt-0 sm:text-[25px] md:text-[30px] lg:text-[44px] md:mt-[0px]'>Tailored Home Designs</h2>
                      <p className='xs:text-[14px] md:text-[15px] lg:text-[18px] sm:leading-[25px] md:leading-[28px] xs:mt-[12px] sm:mt-[22px] lg:mt-[27px] xs:text-center sm:[text-align:unset;]'>
                         Bring your dream home to life with custom designs crafted by expert architects. We tailor every detail to match your unique style, needs, and vision, ensuring a perfect balance of functionality and beauty in every space of your homeTransform your vision into reality with bespoke home designs by expert architects.
                      </p>
                    <ul  className='xs:mt-4 xs:grid xs:grid-cols-1 xm:grid-cols-2 xs:gap-[12px] sm:block'>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px] sm:mt-[20px] md:mt-[20px] lg:mt-[35px] truncate w-55'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Multi-Unit Residences (Duplexes Triplexes etc.)</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px] sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-55'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Total Satisfaction Guarantee</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px] sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-55'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Industrial Real Estate (Warehouses Factories)</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px] sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-55'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Innovation and Development Centers</li>
                         
                    </ul>

               </div>
       </section>
        <section className='xs:h-auto xs:py-4 lg:py-8  bg-[#ffffff] flex text-black sm:gap-[20px] md:gap-[50px] lg:gap-[67px] px-3 xs:flex-col sm:flex-row '>
             <div data-aos="fade-left" className='xs:w-[100%] sm:w-[50%] flex items-center justify-center'>
                    <img src="image/Service/background-2.svg" className='sm:min-w-[260px] md:min-w-[350px]' alt="about"/>
               </div>
               <div data-aos="fade-right" className='xs:w-[100%] sm:w-[50%] flex flex-col justify-center'>
                     
                      <h2 className='xs:text-center sm:[text-align:unset;] xs:text-[25px] xs:mt-[25px] sm:mt-0  sm:text-[25px] md:text-[30px] lg:text-[41px] '>Custom Home Design Planning Services</h2>
                      <p className='xs:text-[14px] md:text-[15px] lg:text-[18px] sm:leading-[25px] md:leading-[28px] xs:mt-[12px] sm:mt-[22px] lg:mt-[27px] xs:text-center sm:[text-align:unset;]'>
                        Bring your dream home to life with custom designs crafted by expert architects. We tailor every detail to match your unique style, needs, and vision, ensuring a perfect balance of functionality and beauty in every space of your home
                      </p>
                      <p className='xs:text-[14px] md:text-[15px] lg:text-[18px] sm:leading-[25px] md:leading-[28px] xs:mt-[12px] sm:mt-[22px] lg:mt-[27px] xs:text-center sm:[text-align:unset;]'>
                        Transform your vision into reality with bespoke home designs by expert architects. Every aspect is personalized to reflect your style, requirements, and aspirations, creating a harmonious blend of practicality and elegance in every room of your home
                      </p>
                   

               </div>
       </section>
        <section className='xs:h-auto xs:py-4 lg:py-8 bg-[#FFFAFA] flex text-black sm:gap-[20px] md:gap-[50px] lg:gap-[90px] px-3 xs:flex-col sm:flex-row-reverse '>
             <div data-aos="fade-left" className='xs:w-[100%] sm:w-[50%] flex items-center justify-center'>
                    <img src="image/Service/background-3.svg" className='sm:min-w-[260px] md:min-w-[350px]' alt="about"/>
               </div>
               <div data-aos="fade-right" className='xs:w-[100%] sm:w-[50%] flex flex-col justify-center'>
                     
                      <h2 className='xs:text-center sm:[text-align:unset;] xs:text-[25px] xs:mt-[25px] sm:mt-0 lg:text-[44px] md:text-[30px] sm:text-[25px]'>Expert Architecture Services</h2>
                      <p className='xs:text-[14px] md:text-[15px] lg:text-[18px] sm:leading-[25px] md:leading-[28px] xs:mt-[12px] sm:mt-[22px] lg:mt-[27px] xs:text-center sm:[text-align:unset;]'>
                        With our expert architecture services, we provide innovative designs tailored to your unique needs. Our experienced architects guide you through every stage, from conceptualization to completion, ensuring your vision comes to life with precision, functionality, and aesthetic appeal.
                      </p>
                    <ul className='xs:mt-4 xs:grid xs:grid-cols-1 xm:grid-cols-2 xs:gap-[12px] sm:block'>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[20px] md:mt-[20px] lg:mt-[35px]  truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Customized designs for unique client needs</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Innovative solutions blending functionality and style</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Detailed planning from concept to completion</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Expert guidance through every architectural phase</li>
                         
                    </ul>

               </div>
       </section>
        <section className='xs:h-auto xs:py-4 lg:py-8  bg-[#FFFAFA] flex text-black sm:gap-[20px] md:gap-[50px] lg:gap-[90px] px-3 xs:flex-col sm:flex-row '>
             <div data-aos="fade-left" className='xs:w-[100%] sm:w-[50%] flex items-center justify-center'>
                    <img src="image/Service/background-4.svg" className='sm:min-w-[260px] md:min-w-[350px]' alt="about"/>
               </div>
               <div data-aos="fade-right" className='xs:w-[100%] sm:w-[50%] flex flex-col justify-center'>
                     
                      <h2 className='xs:text-center sm:[text-align:unset;] xs:text-[25px] xs:mt-[25px] sm:mt-0 sm:text-[25px] md:text-[30px] lg:text-[44px] '>Land Acquisition Assistance</h2>
                      <p className='xs:text-[14px] md:text-[15px] lg:text-[18px] sm:leading-[25px] md:leading-[28px] xs:mt-[12px] sm:mt-[22px] lg:mt-[27px] xs:text-center sm:[text-align:unset;]'>
                        Land Acquisition Assistance helps you navigate the complex process of purchasing land. From identifying the right property to handling legal documentation and negotiations, we provide expert guidance, ensuring a smooth and hassle-free experience in acquiring the perfect land for your needs
                      </p>
                    <ul className='xs:mt-4 xs:grid xs:grid-cols-1 xm:grid-cols-2 xs:gap-[12px] sm:block'>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[20px] md:mt-[20px] lg:mt-[35px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Expert guidance in identifying suitable land.</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Assistance with legal documentation and paperwork</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Assistance with legal documentation and paperwork</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Help with due diligence and land verification</li>
                         
                    </ul>

               </div>
       </section>
       <section className='xs:h-auto xs:py-4 lg:py-8  bg-[#ffffff] flex text-black md:gap-[50px] lg:gap-[90px] px-3  xs:flex-col sm:flex-row-reverse'>
             <div data-aos="fade-left" className='xs:w-[100%] sm:w-[50%] flex items-center justify-center'>
                    <img src="image/Service/background-5.svg" className='sm:min-w-[260px] md:min-w-[350px]' alt="about"/>
               </div>
               <div data-aos="fade-right" className='xs:w-[100%] sm:w-[50%] flex flex-col justify-center'>
                     
                      <h2 className='xs:text-center sm:[text-align:unset;] xs:text-[25px] xs:mt-[25px] sm:mt-0 sm:text-[25px] md:text-[30px] lg:text-[44px] '>Sustainable Smart Homes</h2>
                      <p className='xs:text-[14px] md:text-[15px] lg:text-[18px] sm:leading-[25px] md:leading-[28px] xs:mt-[12px] sm:mt-[22px] lg:mt-[27px] xs:text-center sm:[text-align:unset;]'>
                       Sustainable Smart Homes combine advanced technology with eco-friendly design to create energy-efficient living spaces. These homes use smart systems to optimize energy use, reducing waste and lowering utility costs.  With integrated solar panels, efficient appliances, and intelligent heating/cooling systems, Sustainable Smart Homes minimize environmental impact while providing comfort and convenience
                      </p>
                    <ul className='xs:mt-4 xs:grid xs:grid-cols-1 xm:grid-cols-2 xs:gap-[12px] sm:block'>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[20px] md:mt-[20px] lg:mt-[35px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Metaverse Features in Home.</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Energy-saving lighting and appliances</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Smartphone-controlled temperature management.</li>
                         <li className='xs:text-[14px] md:text-[15px] lg:text-[18px]  sm:mt-[15px] md:mt-[15px] lg:mt-[25px] truncate w-58'><span ><img src="image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Eco-Friendly Materials</li>
                         
                    </ul>

               </div>
       </section>
        <section data-aos="fade-down" className='xs:h-auto xl:h-[662px] bg-[#F8F5F0] '>
            <h4 className='xs:text-[32px] xm:text-[32px] text-[#6D7175] pt-[36px] xs:mt-3 xm:mt-0 xm:pl-3 xs:text-center sm:text-left'>What’s the process?</h4>
                <div className='flex flex-wrap items-center xm:gap-y-10 sm:gap-y-10 xs:py-[15px] sm:py-[53px] px-3'>
                    <div className='text-[44px]   xs:my-4 xm:my-0 xs:w-[100%] xm:w-[50%] sm:w-[33.33%] px-4  overflow-hidden'>
                        <h2 className='text-[#AA8453] font-light flex sm:text-[35px] xs:text-center xm:text-left xs:flex xs:justify-center xm:justify-start '>1. <img src="./image/Service/Line.svg" className='inline px-5 w-full h-auto  xs:hidden sm:block' alt="#" /></h2>
                        <h4 className='mt-[28px] text-[24px] text-[#6D7175] xs:text-center xm:text-left '>Consultation</h4>
                        <p className='mt-[16px] text-[16px] text-[#6D7175] xs:text-center xm:text-left'>Architects and engineers collaborate closely,
                                turning innovative concepts into functional,
                                sustainable .</p>

                    </div>
                    <div className='text-[44px]  xs:my-4 xm:my-0  xs:w-[100%] xm:w-[50%] sm:w-[33.33%] px-4 overflow-hidden '>
                        <h2 className='text-[#AA8453] font-light flex  sm:text-[35px]  xs:text-center xm:text-left xs:flex xs:justify-center xm:justify-start'>2. <img src="./image/Service/Line.svg" className='inline px-5  xs:hidden sm:block' alt="#" /></h2>
                        <h4 className='mt-[28px] text-[24px] text-[#6D7175]  xs:text-center xm:text-left'>Consultation</h4>
                        <p className='mt-[16px] text-[16px] text-[#6D7175] xs:text-center xm:text-left'>Architects and engineers collaborate closely,
                                turning innovative concepts into functional,
                                sustainable .</p>

                    </div>
                    <div className='text-[44px]  xs:my-4 xm:my-0  xs:w-[100%] xm:w-[50%] sm:w-[33.33%] px-4 overflow-hidden'>
                        <h2 className='text-[#AA8453] font-light sm:text-[35px] flex  xs:text-center xm:text-left xs:flex xs:justify-center xm:justify-start'>3. </h2>
                        <h4 className='mt-[28px] text-[24px] text-[#6D7175]  xs:text-center xm:text-left'>Consultation</h4>
                        <p className='mt-[16px] text-[16px] text-[#6D7175] xs:text-center xm:text-left'>Architects and engineers collaborate closely,
                                turning innovative concepts into functional,
                                sustainable .</p>

                    </div>
                    <div className='text-[44px] mt-[53px] xs:my-4 xm:my-0  xs:w-[100%] xm:w-[50%] sm:w-[33.33%] px-4 overflow-hidden'>
                        <h2 className='text-[#AA8453] font-light  sm:text-[35px] flex  xs:text-center xm:text-left xs:flex xs:justify-center xm:justify-start'>4. <img src="./image/Service/Line.svg" className='inline px-5 xs:hidden sm:block' alt="#" /></h2>
                        <h4 className='mt-[28px] text-[24px] text-[#6D7175]   xs:text-center xm:text-left'>Consultation</h4>
                        <p className='mt-[16px] text-[16px] text-[#6D7175]  xs:text-center xm:text-left'>Architects and engineers collaborate closely,
                                turning innovative concepts into functional,
                                sustainable .</p>

                    </div>
                    <div className='text-[44px] xs:my-4 xm:my-0  mt-[53px] xs:w-[100%] xm:w-[50%] sm:w-[33.33%] px-4 overflow-hidden'>
                        <h2 className='text-[#AA8453] font-light  sm:text-[35px] flex xs:flex xs:justify-center xm:justify-start'>5. </h2>
                        <h4 className='mt-[28px] text-[24px] text-[#6D7175]  xs:text-center xm:text-left '>Consultation</h4>
                        <p className='mt-[16px] text-[16px] text-[#6D7175]  xs:text-center xm:text-left'>Architects and engineers collaborate closely,
                                turning innovative concepts into functional,
                                sustainable .</p>

                    </div>
                    
                </div>   
                   
                   
                    
        </section>

      </>
  )
}
