import React, { useEffect, useState,useRef } from 'react'
import '../App.css'
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import Signup from './Signup';
import logo from "/Real-Estate/image/logo.svg"

export default function Header() {
  let [Responsive,setResponsive] = useState (false)
  let [IsLogin,setIsLogin] = useState (false)
  
 return (
       <header 
  className=' h-[100px] sticky top-0 z-20 w-full max-w-[1440px] px-[8px] mx-auto py-[16px] bg-[rgba(217,217,217,0.88)] flex justify-between items-center' >
             {/* This is first part of header */}
             <div>
                  <img src={logo} className='sm:w-[158px] sm:h-[74px] xs:w-[138px] xs:h-[74px]' alt="Loding.." />
             </div>
             {/* This is second part of header */}
             <div>
                       <nav className='text-black font-normal xs:hidden sm:hidden md:block'>
                                   <ul className='flex lg:text-[1.1rem]'>
                                        <li className='mx-[8px] relative group hover:text-[#bb902d]  py-1' ><NavLink to='/'>Home</NavLink>
                                             <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full"></span>
                                        </li>
                                        <li className=' mx-[8px] relative group hover:text-[#bb902d]  py-1'><NavLink to='/About'> About</NavLink>
                                             <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full"></span>
                                        </li>
                                             <li className='mx-[8px] relative  group hover:text-[#bb902d]  py-1'><NavLink to='/Service'>Service</NavLink> <IoIosArrowDown className='ml-1 inline font-normal'/>
                                                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full"></span>  
                                                  <ul className='absolute top-[25px] py-2 z-10 hidden group-hover:block  w-full bg-[#f8f5f0] bg-opacity-80 md:mt-[7px] lg:mt-[9.5px]'>
                                                       <li className=' text-black relative  hover:text-[#bb902d]  py-1 navli'><NavLink to='/Portfolio'>Portfolio</NavLink>
                                                            <span className=" navspan absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 "></span>
                                                       </li>
                                                       <li className=' text-black relative  hover:text-[#bb902d]  py-1 navli'><NavLink to='/Pricing'>Pricing</NavLink>
                                                            <span className="navspan absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 "></span>
                                                       </li>
                                                  </ul>
                                             </li >
                                        <li className='  mx-[8px] relative group hover:text-[#bb902d]  py-1'> <NavLink to='/Insights'>Blog</NavLink>
                                             <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full"></span>
                                        </li>
                                        <li className=' mx-[8px] relative group hover:text-[#bb902d]  py-1'><NavLink to='/Contact'>Contact Us</NavLink>
                                             <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full"></span>
                                        </li>
                                        
                                   </ul>
                         </nav>
                   
             </div>
             {/* This is third part of header */}
             <div className='xs:hidden sm:hidden md:block'>
                 <button className='text-black f-[16px] xl:w-[183px] xl:h-[51px] lg:w-[160px] lg:h-[45px] md:w-[160px] md:text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] md:h-[45px] bg-[#bb902d] rounded-[30px] px-[8px] py-[16px] flex gap-[10px] justify-center items-center' onClick={()=>setIsLogin(true)}>Request a Visit<span className=' max-w-[24px] max-h-[20px] f-[16px] flex  justify-center'><img src="../public/image/ArrowBlack.svg" alt="Arrow" /></span></button>
             </div>
               <div className='md:hidden'>
                   <RxHamburgerMenu className=' h-[2.4rem] w-[2.4rem] text-[#bb902d] border-[0.1px] border-[#bb902d] p-[1px] rounded-[0.5rem]' onClick={()=>setResponsive(true)}/>
               </div>
               

               {/* Responsive header  */}
                <HeaderResponsive className='hidden' Responsive={Responsive} setResponsive={setResponsive} setIsLogin={setIsLogin}/>

               {/* Login section */}
               <Login className='hidden' IsLogin={IsLogin} setIsLogin={setIsLogin}/>
      </header>
       
  )
}




export  function HeaderResponsive({Responsive,setResponsive,setIsLogin}) {
  return (
    <div className={`absolute top-0 right-0 h-[100vh] w-[18rem] bg-[rgba(0,0,0,0.8)] z-10 text-white 
              transform transition-transform duration-300 ease-in-out 
              ${Responsive ? 'translate-x-0 block' : 'translate-x-full hidden'} `}>
                    <nav className=' font-normal relative pt-3 ' >
                                   <ul className='inline-flex lg:text-[1.1rem] flex-col gap-2 '>
                                        <li className='mx-[8px] relative group hover:text-[#bb902d]  py-1  w-fit' ><NavLink to={'/'}>Home</NavLink>
                                             <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full"></span>
                                        </li>
                                        <li className=' mx-[8px] relative group hover:text-[#bb902d]  py-1 w-fit'><NavLink to={'/About'}>About</NavLink>
                                             <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full"></span>
                                        </li>
                                             <li className='mx-[8px] relative  group hover:text-[#bb902d]  py-1'><NavLink to='/Service'>Service</NavLink> <IoIosArrowDown className='ml-1 inline font-normal'/>
                                                  <span className="absolute left-0 top-[35px] h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full "></span>  
                                                  <ul className='static top-[25px] pt-2  hidden group-hover:block '>
                                                       <li className='!text-white relative  hover:text-[#bb902d]  py-1 navli w-fit'><NavLink to='/Portfolio'>Portfolio</NavLink>
                                                            <span className=" navspan absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 "></span>
                                                       </li>
                                                       <li className='!text-white relative  mt-1 hover:text-[#bb902d]  py-1 navli w-fit'><NavLink to='/Pricing'>Pricing</NavLink>
                                                            <span className="navspan absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 "></span>
                                                       </li>
                                                  </ul>
                                             </li >
                                        <li className='  mx-[8px] relative group hover:text-[#bb902d]  py-1 w-fit'><NavLink to='/Insights'>Blog</NavLink>
                                             <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full"></span>
                                        </li>
                                        <li className=' mx-[8px] relative group hover:text-[#bb902d]  py-1 w-fit'><NavLink to='/Contact'>Contact Us</NavLink>
                                             <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full"></span>
                                        </li>
                                         <li className=' mx-[8px] relative group hover:text-[#bb902d]  py-1' onClick={()=>setIsLogin(true)}>Request a Visit
                                             <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#bb902d] transition-all duration-300 group-hover:w-full"></span>
                                        </li>
                                   </ul>
                                   <div className='absolute pt-3 top-1 right-2 text-[20px]' >
                                         <IoMdClose className=' hover:hover:text-[#bb902d]' onClick={()=>setResponsive(false)}/>
                                   </div>
                         </nav>
     </div>
  )
}


export  function Login({IsLogin,setIsLogin}) {
  return (
    <div className={`${IsLogin? 'block':'hidden'} absolute top-0 left-0 h-[100vh] flex justify-center flex-col items-center  w-full bg-[rgba(0,0,0,0.8)]` }>
           <div className='max-h-[500px] max-w-[80%] w-full overflow-y-scroll'>
                   <Signup setIsLogin={setIsLogin}/>
          </div>
           
        
     Login</div>
  )
}
