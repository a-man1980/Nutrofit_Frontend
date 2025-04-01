import React, { useContext } from 'react'
import { coaches } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function TopDoctors() {
    const navigate = useNavigate();
    const {coaches}=useContext(AppContext);
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Coaches to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Browse through our extensive list of trusted coaches.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                { 
                    coaches.map((item, index) => (
                        <div onClick={(e)=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" key={index}>
                            <img className='bg-red-50' src={item.image} alt="" />
                            <div className='p-4'>
                                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? ' text-green-500':' text-red-500'}`}>
                                    <p className={`w-2 h-2 ${item.available ? ' bg-green-500 rounded-full':' bg-red-500 rounded-full'}`}></p><p>{item.available?'Available':'Not Available'}</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={(e)=>{navigate('/coaches');scrollTo(0,0)}}className='bg-primary text-white px-12 py-3 rounded-full mt-10'>More</button>
        </div>
    )
}

export default TopDoctors;