import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate();
    return (
        <>
        <div className='md:mx-10 pt-10'>
            <hr />
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
                {/* left side */}
                <div>
                    <img className="mb-5 w-40" src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>At NutroFit, we believe in a balanced lifestyle that nourishes both body and mind. Join us on a journey to optimal health and wellness.</p>
                </div>

                {/* right side */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li onClick={(e)=>{navigate('/');scrollTo(0,0)}} className='cursor-pointer'>Home</li>
                        <li onClick={(e)=>{navigate('/about');scrollTo(0,0)}} className='cursor-pointer'>About Us</li>
                        <li onClick={(e)=>{navigate('/contact');scrollTo(0,0)}} className='cursor-pointer'>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>

                {/* right side */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-211-234-7800</li>
                        <li>nutrofit@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/* copyright Text */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © Nutrofit - All Rights Reserved.</p>

            </div>

        </div>
        </>
    )
}

export default Footer