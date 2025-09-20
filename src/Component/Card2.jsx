import React from 'react'

export default function Card2({value}) {
  return (
    <>
        <div className='w-full  h-full rounded-[20px]'>
                        <div className='rounded-[20px]'>
                             {/* <img src="./image/backgroun-img-slider.svg" className='h-full w-full' alt="#" /> */}
                             <img src={value.image} className='h-auto w-full' alt="#" />
                        </div>
                        <div className='bg-white xl:h-[144px] px-1 text-black flex flex-col justify-center' style={{ boxShadow: "0px 0px 14px rgba(0,0,0,0.3)" }}>
                             <ul className='flex justify-between pt-[9px]'>
                                <li className='text-[14px]  font-light'>Jan 24-2-2025</li>
                                <li className='text-[14px]  font-light'>4 min read</li>
                             </ul>
                             <p className='text-[17px] align-start text-start  mt-[8px]'>
                                Latest Trends and Updates in Real Estate Market
                             </p>
                              <p className='text-[12px] align-start text-start  mt-[7px] text-[#8B8B8B]'>
                                This new this resent new and shall done some which where some <br className='xs:hidden xl:block'/> value not comes without   withoutt new and shall done some which 
                             </p>
                             <button className='flex gap-2 text-start block text-[15px] text-[#EED26E] my-[10px]'>Read More <span className='min-w-[40px] mr-0.5'><img src="./image/Yellow-Arrow.svg"  className='!inline h-[10px]' alt="#" /></span></button>
                        </div>

                   </div>
    </>
  )
}
