
import { useRef } from 'react'
import '../App.css'
import Card from '../Component/Card'
import Slider4 from '../Component/Slider4'
import Sliders from '../Component/Sliders'
import { data } from '../data/Data'
import Sliders5 from '../Component/slider_5'
import Testimonial from '../Component/Testimonial'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Signup from '../Component/Signup'

export default function Home() {
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
      <>
          
<section className='relative max-w-[1440px]  h-auto contain-content overflow-hidden' data-aos="fade-up">
           <div className=' w-full h-full'>
               <Sliders/>
            
        </div>
          
</section>

        {/* this is about section */}
        <section  className=' bg-white md:h-auto lg:h-[588px] flex  w-full text-black xl:px-[100px] lg:px-[20px] md:px-[20px] xs:flex-col-reverse md:flex-row lg:flex-row  lg:py-0 xs:py-10 sm:py-10 md:py-10 '  data-aos="fade-up">
               <div data-aos="fade-right"  className='md:w-[100%] lg:w-[50%] flex items-center justify-center'>
                    <img src="../public/image/background-about.svg"  className='md:h-[320px] lg:h-auto md:w-[320px] lg:w-auto xm:w-[400px] xm:h-[400px] xs:w-[300px] xs:h-[300px] ' alt="about"/>
               </div>
               <div  data-aos="fade-left" className=' md:w-[100%] lg:w-[50%] xs:text-center sm:text-center md:text-left'>
                      <h4 className='text-[16px] xs:mt-[0px] sm:mt-[0px] md:mt-[42px]'><span><img src="../public/image/line-about.svg" className='inline mr-3' alt="line"/></span>About Us<span><img src="../public/image/line-about.svg" className='inline ml-3' alt="line"/></span></h4>
                      <h2 className=' xs:text-[35px] sm:text-[35px] md:text-[35px] lg:text-[48px]  lg:mt-[18px] xs:mt-[0px] md:mt-[14px]'>Introducing Realar</h2>
                      <p className='px-2 sm:text-center md:text-left md:text-[15px] lg:text-[18px] md:leading-[24px] lg:leading-[28px]  md:mt-[14px] lg:mt-[27px]'>
                         Real estate involves buying, selling, or renting properties such as homes, commercial buildings, and land. It includes market analysis, investment opportunities, and legal procedures for property transactions and development.
                      </p>
                    <ul className='xs:pb-4 sm:pb-4 md:pb-0 xs:w-fit md:w-full sm:text-left xs:text-left xs:mx-auto sm:mx-auto md:mx-0'>
                         <li className='  xs:text-[14px] md:text-[16px] lg:text-[18px] xs:mt-[20px] sm:mt-[25px] md:mt-[20px] lg:mt-[35px]'><span ><img src="../public/image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Multi-Unit Residences (Duplexes Triplexes etc.)</li>
                         <li className='  xs:text-[14px] md:text-[16px] lg:text-[18px] xs:mt-[10px] sm:mt-[15px] md:mt-[10px] lg:mt-[25px]'><span ><img src="../public/image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Total Satisfaction Guarantee</li>
                         <li className='  xs:text-[14px] md:text-[16px] lg:text-[18px] xs:mt-[10px] sm:mt-[15px] md:mt-[10px] lg:mt-[25px]'><span ><img src="../public/image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Industrial Real Estate (Warehouses Factories)</li>
                         <li className='  xs:text-[14px] md:text-[16px] lg:text-[18px] xs:mt-[10px] sm:mt-[15px] md:mt-[10px] lg:mt-[25px]'><span ><img src="../public/image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Innovation and Development Centers</li>
                         <li className='  xs:text-[14px] md:text-[16px] lg:text-[18px] xs:mt-[10px] sm:mt-[15px] md:mt-[10px] lg:mt-[25px]'><span ><img src="../public/image/check-box-about.svg" className='inline mr-2' alt="check" /></span>Future Development Hubs</li>
                    </ul>

               </div>
        </section>
        {/* latest propert */}
         <section data-aos="fade-down" className=' my-8 bg-white'>
               <div className='top_main flex sm:flex-row xs:flex-col justify-between px-2 '>
                    <div className=''>
                         <h2 className='xs:text-[40px] lg:text-[48px] !font-light sm:text-left xs:text-center'>
                             Latest Property
                         </h2>
                         <h5 className='sm:text-left xs:text-center md:text-[16px] lg:text-[18px] mt-[16px] leading-[24px] '>
                          Latest Property: Architects and Engineers Work Together <br className='xs:hidden md:block'/>
                           to Transform Concepts into Practical Structures
                         </h5>
                    </div>
                    <div className='flex items-center'>
                          <button className="xs:mt-4 xs:mx-auto sm:mx-0 sm:mt-0 border border-black text-black text-[16px] w-[183px] h-[51px] bg-transparent rounded-[30px] sm:px-[6px] sm:py-[16px] flex gap-[10px] items-center justify-center">
                                Request a Visit
                                <span className="max-w-[24px] max-h-[20px] flex justify-center ">
                                <img src="/image/ArrowBlack.svg"  alt="Arrow" />
                                </span>
                        </button>
                    </div>
               </div>
               <div className='grid md:gap-[40px] sm:gap-[30px] xs:gap-[30px] lg:gap-[20px] xl:gap-[49px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto xs:mt-[30px] sm:mt-[68px]'>
                   {data.map((value,index)=>{
                          return(
                             <div key={index}>
                               <Card image={value.image}/>
                             </div>
                          )
                      })}
               </div>
         </section>
       {/* news and blogs */}
          <section data-aos="fade-down" className='max-h-[900px] h-auto  border border-transparent w-full bg-[#f8f5f0] text-black mt-[36px]'>
              <div className='flex justify-between px-3 sm:flex-row xs:flex-col sm:text-left xs:text-center'>
                   <div className='main'>
                         <h4 className='text-[16px] pt-[42px] '><span><img src="../public/image/Black-Line.svg" className='inline mr-3' alt="line"/></span>News & Blog<span><img src="../public/image/Black-Line.svg" className='inline ml-3' alt="line"/></span></h4>
                          <h2 className='xs:text-[32px] sm:text-[32px] md:text-[38px] lg:text-[48px] mt-[18px] font-light'>Explore Our Insights</h2>
                          <p className='font-medium mt-[13px] sm:text-[13px] md:text-[15px] lg:text-[18px]'>Architects and engineers work together to transform concepts<br className='xs:hidden xm:block'/>
                           into practical structures.</p>
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
           <div data-aos="fade-up" className='mt-[49px]'>
                <Slider4 swiperRef={swiperRef} />
           </div>
             <div className='my-[22px]  text-center'>
                  <button className="border items-center border-black text-black text-[16px] w-[183px] h-[51px] bg-transparent rounded-[30px] px-[8px] py-[16px] flex gap-[10px] justify-center m-auto">
                                Request a Visit
                                <span className="max-w-[24px] max-h-[20px] flex justify-center ">
                                <img src="/image/ArrowBlack.svg"  alt="Arrow" />
                                </span>
                  </button>

             </div>
         </section> 
        
  {/* this is Explor our service */}
 <section data-aos="fade-down" className='h-[828px] w-full px-2'>
         <div className='text-center'>
             <h2 className='xs:text-[35px] sm:text-[48px] mt-[14px] font-light'>Explore Our Services</h2>
             <h4 className='text-[18px] mt-[27px]'>Architects and engineers work together to transform conceptsinto practical structures.</h4>
         </div>
         <div className='mt-[51px] h-[596px] overflow-hidden px-[25px] '>
              <Sliders5/>
         </div>
  </section>
   <section>
           <div className='mt-[0px] bg-[#F8F5F0] max-h-[800px] h-[auto] '>
              <div className='pt-[70px]  text-center'>
                   <h4 className='text-black text-[16px] '><img src="./image/Black-Line.svg" className='inline mr-2' alt="#" />Testimonial <img src="./image/Black-Line.svg" className='inline ml-2' alt="#" /></h4>
                   <h6 className='xs:text-[30px] xm:text-[40px] sm:text-[48px] mt-[16px] text-black'>What Customers Say</h6>
              </div>
         <div className='my-[60px]'>
             <Testimonial/>
          

         </div>   
          </div>

   </section>
       
       {/* <section>
             <Footer/>
            <About/>
            <Service/>
            <Portfolio/>
            <Insights/>
             <Contact/>
             <Pricing/>
           
             
             
            
       </section>       */}
    

      </>
  )
}
