import React, { useState } from 'react'

import {MenuIcon, XIcon} from '@heroicons/react/outline'


const Navbar = () => {

  const [nav , setNav] = useState(false)

  const handleClick = () =>{

    setNav(!nav)
  }


  return (
   

      <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg '>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center '>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Brand.</h1>
            <ul className='hidden md:flex '>
              <li className='p-3 text-slate-700 font-normal cursor-pointer hover:text-[#4844d3] hover:transition-all delay-150 '>Home</li>
              <li className='p-3  text-slate-700 font-normal cursor-pointer hover:text-[#4844d3] hover:transition-all delay-150  '>About</li>
              <li className='p-3  text-slate-700 font-normal cursor-pointer hover:text-[#4844d3] hover:transition-all delay-150 '>Support</li>
              <li className='p-3  text-slate-700 font-normal cursor-pointer hover:text-[#4844d3] hover:transition-all delay-150 '>Platforms</li>
              <li className='p-3  text-slate-700 font-normal cursor-pointer hover:text-[#4844d3] hover:transition-all delay-150 '>Pricing</li>
            </ul>
            
          </div>

          {/* Buttons */}

          <div className='hidden md:flex items-end '>

            <button className='text-slate-500 font-normal mx-5 my-1 mb-2 tracking-wide  cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#4844d3]'>Sign In</button>
            <button className='text-white font-normal px-3 py-2 rounded  mx-2 tracking-wide cursor-pointer  bg-[#4844d3] hover:-translate-y-1 hover:scale-110 duration-300 '>Sign Up</button>

          </div>

          <div className='md:hidden' onClick={handleClick}>

            {!nav ? <MenuIcon className='w-5 cursor-pointer' /> : <XIcon className='w-5 cursor-pointer' />}
               

          </div>

        </div>

        <ul className={!nav ?  'hidden' : ' absolute bg-zinc-200 w-full px-8 '}>
              <li className='p-3 text-slate-700 font-normal cursor-pointer hover:text-[#4844d3] hover:transition-all delay-150  border-b-2 border-zinc-300 w-full '>Home</li>
              <li className='p-3  text-slate-700 font-normal cursor-pointer hover:text-[#4844d3] hover:transition-all delay-150 border-b-2 border-zinc-300 w-full  '>About</li>
              <li className='p-3  text-slate-700 font-normal cursor-pointer hover:text-[#4844d3] hover:transition-all delay-150 border-b-2 border-zinc-300 w-full '>Support</li>
              <li className='p-3  text-slate-700 font-normal cursor-pointer hover:text-[#4844d3] hover:transition-all delay-150 border-b-2 border-zinc-300 w-full '>Platforms</li>
              <li className='p-3  text-slate-700 font-normal cursor-pointer hover:text-[#4844d3] hover:transition-all delay-150 border-b-2 border-zinc-300 w-full '>Pricing</li>

              <div className='flex flex-col my-4'>

                  <button className='text-slate-500 border border-indigo-800 px-3 py-2 mx-2 font-bold  my-1 mb-2 tracking-wide  cursor-pointer hover:text-[#4844d3]'>Sign In</button>
                  <button className='text-white font-normal px-3 py-2 rounded  mx-2 tracking-wide cursor-pointer  bg-[#4844d3] '> Sign Up</button>

              </div>

        </ul>

       


      </div>


  )
}

export default Navbar
