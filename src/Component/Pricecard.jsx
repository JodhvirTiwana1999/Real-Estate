import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
export default function Pricecard({value}) {
  return (
       <section>
            <div className='xl:h-[732px] xl:w-[416px] border border-[#6D7175] rounded-3xl'>
                    <div className='h-[70px] w-[70px] bg-[#6D7175] flex items-center justify-center rounded-[100px] mt-[32px] ml-[30px]'>
                          <MdOutlineHome className='text-[40px] text-white'/>
                     </div>
                     <h3 className='font-semibold text-[38px] text-[#6D7175] mt-[38px] ml-[30px]'>{value.title}</h3>
                      <hr className='mt-[44px] border-1 border-[#6D7175]'/>
                      <div className='py-[30px] px-[30px]'>
                        <h2 className='font-semibold text-[38px] text-[#6D7175]'>$15900.00<span className='text-[18px]'>/Month</span></h2>
                        <h5 className=' text-[16px] font-semibold text-[#6D7175] mt-3'>Automatically connect with prospective clients</h5>
                        <button className='mt-6 w-full max-w-[350px] h-[62px] border border-[#6D7175] rounded-3xl text-[18px] font-semibold text-[#6D7175]'>Get Started</button>
                         <ul className='mt-[26px] text-[#6D7175] text-[18px] font-semibold flex flex-col gap-[7px]'>
                               <li className='w-50 truncate '><span><IoMdCheckmarkCircleOutline  className='h-[24px] w-[24px] text-[#6D7175] inline mr-8'/></span>Free Listing</li>
                               <li className='w-50 truncate '><span><IoMdCheckmarkCircleOutline  className='h-[24px] w-[24px] text-[#6D7175] inline mr-8'/></span>15 Featured Listing</li>
                               <li className='w-50 truncate '><span><IoMdCheckmarkCircleOutline  className='h-[24px] w-[24px] text-[#6D7175] inline mr-8'/></span>Contact with agent</li>
                               <li className='w-50 truncate '><span><IoMdCheckmarkCircleOutline  className='h-[24px] w-[24px] text-[#6D7175] inline mr-8'/></span>2 Year validity</li>
                               <li className='w-50 truncate '><span><IoMdCheckmarkCircleOutline  className='h-[24px] w-[24px] text-[#6D7175] inline mr-8'/></span>24/7 Support center</li>
                               <li className='w-50 truncate '><span><IoMdCheckmarkCircleOutline  className='h-[24px] w-[24px] text-[#6D7175] inline mr-8'/></span>100% money back guarantee</li>
                               <li className=' w-50 truncate'><span><IoMdCheckmarkCircleOutline  className='h-[24px] w-[24px] text-[#6D7175] inline mr-8'/></span>Auto refresh ads</li>
                         </ul>
                      </div>
            </div>
       </section>
  )
}
