import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function Coaches() {
  const { speciality } = useParams();
  const { coaches } = useContext(AppContext);
  const [filterCoach, setFilterCoach] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterCoach(coaches.filter(coach => coach.speciality === speciality));
    } else {
      // speciality is undefined when no speciality is selected
      setFilterCoach(coaches);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [coaches, speciality])

  return (
    <div className='mb-4'>
      <p className='text-gray-600'>Speciality:</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-2'>
        <div className='flex flex-col gap-4 text-gray-600 text-sm pt-3'>
          {/* intially use params se speciality dekhega jo ki undefined hogi thus speciality match nhi hogi and we redirect to /coach/speciality page */}
          {/* If the current speciality is already "Weight Loss Coach"(jo ki first click pe ho jayegi use params me se), clicking on it will navigate to /coaches, removing the filter. */}
          <p onClick={() => speciality === 'Weight Loss Coach' ? navigate('/coaches') : navigate('/coaches/Weight Loss Coach')} className={`w-[90vw] sm:w-auto pl-1 py-1.5 pr-5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Weight Loss Coach" ? "bg-red-100 text-black" : ""}`}>Weight Loss Coach</p>
          <p onClick={() => speciality === 'Muscle Gain Coach' ? navigate('/coaches') : navigate('/coaches/Muscle Gain Coach')} className={`w-[90vw] sm:w-auto pl-1 py-1.5 pr-5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Muscle Gain Coach" ? "bg-red-100 text-black" : ""}`}>Muscle Gain Coach</p>
          <p onClick={() => speciality === 'Yoga Instructor' ? navigate('/coaches') : navigate('/coaches/Yoga Instructor')} className={`w-[90vw] sm:w-auto pl-1 py-1.5 pr-5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Yoga Instructor" ? "bg-red-100 text-black" : ""}`}>Yoga Instructor</p>
          <p onClick={() => speciality === 'Meal Planning Expert' ? navigate('/coaches') : navigate('/coaches/Meal Planning Expert')} className={`w-[90vw] sm:w-auto pl-1 py-1.5 pr-5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Meal Planning Expert" ? "bg-red-100 text-black" : ""}`}>Meal Planning Expert</p>
          <p onClick={() => speciality === 'General Fitness Coach' ? navigate('/coaches') : navigate('/coaches/General Fitness Coach')} className={`w-[90vw] sm:w-auto pl-1 py-1.5 pr-5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General Fitness Coach" ? "bg-red-100 text-black" : ""}`}>General Fitness Coach</p>
          <p onClick={() => speciality === 'Injury Recovery Specialist' ? navigate('/coaches') : navigate('/coaches/Injury Recovery Specialist')} className={`w-[90vw] sm:w-auto pl-1 py-1.5 pr-5 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Injury Recovery Specialist" ? "bg-red-100 text-black" : ""}`}>Injury Recovery Specialist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 pt-3 gap-y-6 px-3 sm:px-0'>
          {
            filterCoach.map((item, index) => (
              <div onClick={(e) => navigate(`/appointment/${item._id}`)} className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500" key={index}>
                <img className='bg-red-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm text-center ${item.available ? ' text-green-500' : ' text-red-500'}`}>
                    <p className={`w-2 h-2 ${item.available ? ' bg-green-500 rounded-full' : ' bg-red-500 rounded-full'}`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))

          }
        </div>
      </div>

    </div>
  )
}

export default Coaches