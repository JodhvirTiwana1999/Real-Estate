import React from 'react'

export default function Card({image,data}) {
 let cardimage = image || data?.image
    return (
     <div className='xl:w-[380px] 2l:w-[416px] lg:w-[320px] md:w-[350px] sm:w-[300px] xs:w-[300px] xm:w-[380px]  h-[542px]  overflow-hidden '>
          <div className='w-full h-[279px] relative  bg-no-repeat' style={{ backgroundImage: `url(${cardimage})` }} >
                  
                <div>
                    <span className='mt-2 text-[12px] mx-2 rounded-[5px]  p-2 bg-[rgba(0,0,0,0.8)] text-white inline-block'>For Sale</span>
                </div>
                <div className='w-full flex justify-between items-center px-1 absolute bottom-0 mb-2'>
                     <h4 className='text-[13px]'><span className='mr-1'><img src="image/building_logo.svg" className='inline' alt="building" /></span>APARTMENT</h4>
                    <div className='flex flex-row gap-[7px]'>
                       <img src="image/changearrow.svg" alt="icon"/>
                       <img src="image/Hearticon.svg" alt="heart"/>
                       <img src="image/Zoomeicon.svg" alt="zoom"/>
                    </div>                    
  
                </div>
          </div>
          <div className='w-full h-[263px] bg-[#f8f5f0] text-black px-2 relative'>
               <h2 className='text-[21px] text-[#AA8453] font-semibold pt-[22px]' >$2025 <span className='text-[14px] text-[#6D7175]'>( Monthly )</span></h2>
               <h4 className='font-[18px] font-semibold text-[#6D7175] mt-1.5'>Family House Residense</h4>
               <h4 className='font-[14px] font-semibold text-[#6D7175] mt-[10px]'><span><img src="image/location_icon.svg" className='inline pr-1' alt="#" /></span>4213 South Burlings, Usa</h4>
               <ul className='font-[14px] font-semibold text-[#6D7175] flex mt-[17px] gap-1'>
                   <li><span><img src="image/bedroom.svg" className='inline' alt="#" /></span>7</li>
                   <li><span><img src="image/shower.svg" className='inline' alt="#" /></span>5</li>
                   <li><span><img src="image/arcticons.svg" className='inline' alt="#" /></span>1200sqft</li>
                   <li><span><img src="image/fire.svg" className='inline' alt="#" /></span>Yes</li>
               </ul>
               <div className='absolute bottom-5 inset-x-0 '>
                    <hr className='border-[#6D7175] my-5'/>
                    <div className='flex justify-between px-2'>
                    <h4 className='text-[#6D7175] font-semibold'><img src="../public/image/button_image.svg" className='inline mr-1' alt="" />Aman Sharma</h4>
                    <h4 className='text-[#6D7175] flex items-center font-semibold'> 6 Month Ago</h4>                
                    </div>
               </div>
          </div>
             
     </div>
  )
}
