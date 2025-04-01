import React from 'react';
import { assets } from "../assets/assets"

function About() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font font-medium'>US</span></p>
      </div>
      {/* div for image on leftside and text on right side */}
      <div className=' my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[320px] border border-gray-500 rounded-lg' src={assets.about_image} alt="" />
        <div className='flex flex-col items-start gap-6 md;w-2/4 text-sm text-gray-600 '>
          <p>Welcome to NutroFit, your trusted partner in achieving optimal health and wellness through personalized nutrition and fitness solutions. At NutroFit, we understand the challenges individuals face in maintaining a balanced lifestyle, and we're here to make your wellness journey seamless and effective.</p>
          <p>NutroFit is committed to excellence in health technology. We continuously innovate to enhance our platform, integrating the latest advancements in nutrition and fitness to improve user experience and deliver superior results. Whether you're starting your wellness journey or looking to optimize your fitness goals, NutroFit is here to support you every step of the way.</p>
          <b className='text-gray-800 underline'>Our Vision : </b>
          <p>Our vision at NutroFit is to create a healthier future for every individual. We aim to bridge the gap between personalized nutrition, fitness, and technology, making it easier for you to achieve and sustain a healthy lifestyle</p>
        </div>
      </div>
      {/* Why Choose Us? */}
      <div className='text-xl mt-12 mb-2'>
        <p className='underline'>WHY <span className='text-gray-700 font-semibold'>CHOOSE US ?</span></p>
      </div>
      {/* table */}
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border  rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-black transition-all duration-900 text-gray-600 cursor-pointer'>
          <b className='underline'>Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-black transition-all duration-900 text-gray-600 cursor-pointer'>
          <b className='underline'>Convenience</b>
          <p>Access to a network of trusted Fitness professionals in your area.</p>
        </div>

        <div className='border rounded-lg px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-secondary hover:text-black transition-all duration-900 text-gray-600 cursor-pointer'>
          <b className='underline'>Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>

      </div>

    </div>
  )
}

export default About