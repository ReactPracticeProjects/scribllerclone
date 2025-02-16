import React from 'react'

function Footer() {
  return (
    <div id="contact" className='bg-buttonbg h-[55vh] p-20 flex justify-between'>
      
      <div className='w-[40%]'>
        <img className="w-[200px]" src="logo.png" alt="" />
        <p className='text-bg'>Making JavaScript accessible to every one.</p>
      </div>

      <div className='bg-white w-[70%] h-full p-6 flex flex-col gap-5 rounded-sm'>
        <p className='font-semibold text-2xl'>Subscribe</p>

        <div className='flex flex-col gap-2'>
            <p>Email Address <span className='text-red-600'>*</span></p>
            <input className='border-1 p-2 rounded-sm outline-none' type="text" placeholder='Enter your Email' required /> <br/>
        </div>
        
        <button className='bg-black text-white  rounded-sm px-6 py-2 w-fit'>Subscribe</button>

      </div>
    </div>
  )
}

export default Footer;
