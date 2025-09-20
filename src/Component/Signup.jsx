import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Signup({setIsLogin}) {
  return (
         <>
               
      <section className='relative w-full h-auto grid xs:grid-cols-1 md:grid-cols-2 '>
           <button className='absolute right-4 top-4 p-1 xs:h-[35px] md:h-[45px] xs:w-[35px] md:w-[45px] rounded-xl bg-black z-20 xs:text-[20px] md:text-[25px] text-white hover:text-[yellow] flex justify-center items-center' onClick={()=>setIsLogin(false)}>X</button>
             <div  className='h-full'>
                   <img src="../public/image/Signup/signup.svg" className='object-cover h-full xs:hidden md:block'  alt="#" />
             </div>
             <div className='bg-[#f8f5f0] xs:px-2 lg:px-10 py-6 w-full max-h-[808px] h-full overflow-hidden'>
                    <div className='bg-white  md:max-w-[526px] w-full max-h-[708px] h-full px-5'>
                        <h2 className='text-[24px] text-black pt-[34px]'>Registration</h2>
                    <form action="#">
                          <ul className='mt-[45px] flex flex-col gap-5'>
                              <li>
                                  <label htmlFor="" className='text-[15px]' >Your Name</label><br/>
                                  <input type="text" className='focus:outline-none focus:ring-0 focus:border-transparen px-2 mt-2 max-w-[464px] rounded-xl w-full h-[45px] border border-[#AA8453]'  />
                              </li>
                              <li>
                                  <label htmlFor="" className='text-[15px]' >Your Email</label><br/>
                                  <input type="text" className='focus:outline-none focus:ring-0 focus:border-transparen px-2 mt-2 max-w-[464px] rounded-xl w-full h-[45px] border border-[#AA8453]'  />
                              </li>
                              <li>
                                  <label htmlFor="" className='text-[15px]' >Your Password</label><br/>
                                  <input type="text" className='focus:outline-none focus:ring-0 focus:border-transparen px-2 mt-2 max-w-[464px] rounded-xl w-full h-[45px] border border-[#AA8453]'  />
                              </li>
                              <li>
                                  <label htmlFor="" className='text-[15px]' >Re - Enter -password</label><br/>
                                  <input type="text" className='focus:outline-none focus:ring-0 focus:border-transparen px-2 mt-2 max-w-[464px] rounded-xl w-full h-[45px] border border-[#AA8453]'  />
                              </li>
                              <li >
                                  <input type="checkbox" className='focus:outline-none focus:ring-0 focus:border-transparen px-2 mr-4 mt-2  rounded-xl  h-[16px] w-[16px] border border-[#AA8453]'  />
                                  <label htmlFor="" className='text-[15px]' >Accept Terms and Conditions</label>
                              </li>
                          </ul>
                             <NavLink to='/'>
                                        <button type='submit' className='my-7 h-[45px] max-w-[140px] bg-[#AA8453] uppercase text-white w-full rounded-[12px]' onClick={()=>setIsLogin(false)}>
                                   SignUp  
                             </button>
                             </NavLink>
                            
                             <h3 className='mb-4 text-[15px] cursor-pointer hover:text-[#AA8453]'>View Your Term and condition</h3>
                    </form>
                    </div>
             </div>
      </section>
         </>
  )
}
