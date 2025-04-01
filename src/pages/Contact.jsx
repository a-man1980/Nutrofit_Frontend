import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font font-medium'>US</span></p>
      </div>

      {/* div for image on leftside and text on right side */}
      <div className=' my-10 flex flex-col md:flex-row gap-12 justify-self-center'>
        <img className='w-full md:max-w-[320px] border border-gray-500 rounded-lg' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center gap-6 items-start'>
          <p className='font semibold text-lg text-gray-600 underline'>Our Office : </p>
          <p className='text-gray-500'>
            54821 Collins Junction <br />
            Suite 360, Hamilton, USA
          </p>
          <p className='text-gray-500'>Tel : +1-211-234-7800<br></br>Email : nutroFit@gmail.com</p>
          <p className='font semibold text-lg text-gray-600 underline'>Careers at NutroFit :</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm rounded-md  hover:bg-primary hover:text-white transition-all duration-900 text-gray-600 cursor-pointer'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact