import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import { toast } from 'react-toastify';
import axios from 'axios';

function Appointment() {
  const { coachID } = useParams(); //fetching coachid from query parameters
  const { coaches, currencySymbol, backendUrl, token, getCoachesData } = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; //for displaying

  const navigate = useNavigate();


  // state variable for maintaining current selected coachinfo
  const [coachInfo, setCoachInfo] = useState(null);

  // state variable for a range of coach slots
  const [coachSlots, setCoachSlots] = useState([]);

  // state variale for maintaing which slot index has been chosen by user out of our given dates(indices)
  const [slotIndex, setSlotIndex] = useState(0);

  // state variable for maintaining time selected by user
  const [slotTime, setSlotTime] = useState("");

  // function for getting available slots for each coach
  const getAvailableSlots = async () => {
    setCoachSlots([]); //clearing previous slots if any

    // getting current date

    let today = new Date(); //intialsing a new date using date constructor

    for (let i = 0; i < 7; i++) {
      // getting 7 days from today using index;
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i); //setting current date using setDate function of Date class by first requesting today's date using getDate then adding index

      // setting endtime using index(endtime of slots)
      let endTime = new Date();
      endTime.setDate(today.getDate() + i); //currentdate jitni hi enddate set krli ab isme hours set krdenge for last slot of the day
      endTime.setHours(21, 0, 0, 0) //setting hours of endtime 21hrs 0min 0sec 0milisec

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        //aaj ka hi din h then current time se agle slots dikhane pdenge 
        currentDate.setHours(currentDate.getHours() >= 10 ? currentDate.getHours() + 1 : 10); //agr abhi ka current time 10 se jyada h then set currenttimehrs+1 nhi to set 10
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0); //say curr time 10:18 h then we set hrs to 10+1==11 and minutes-->0 thus nexy slot 11:00 am se show hoga
      } else {
        // future vala din h slots me hrs 10 se start hona chaiye aur min 0 se;
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      // creating slots in every 30min time interval
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); //converting current time to locale string with format of 08:30am say

        // yha pe pehle check krenge ki agr slots booked h to unhe timeslots me push nhi krenge
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        const slotDate = day + "_" + month + "_" + year;
        const slotTime = formattedTime;

        const isSlotAvailable = coachInfo.slots_booked[slotDate] && coachInfo.slots_booked[slotDate].includes(slotTime) ? false : true; //agr coachki info me slots booked h us date ka and us time ka then false otherwise true

        if (isSlotAvailable) {

          // adding currslot to array
          timeSlots.push({
            datetime: new Date(currentDate), //slots me ek object push krdia with date of current date and time of formatted time
            time: formattedTime,
          });

        }

        // incrementing currtime by 30 min
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setCoachSlots(prev => ([...prev, timeSlots]));


    }

  }

  // function for fetching coachinfo from coaches
  const fetchCoachInfo = async () => {
    const coachInfo = await coaches.find(coach => coach._id == coachID);
    setCoachInfo(coachInfo);
  }

  // function for booking an appointment
  const bookAppointmnet = async (req, res) => {
    if (!token) {
      toast.warn("Login To Book Appointment");
      return navigate("/login") //login page pe redirect warning deke
    }

    try {

      const date = coachSlots[slotIndex][0].datetime; //console me array print ho rhe h unse smjh le
      // slotindex vo index h agli 7 dates me se jo user ne select kra h

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      const slotDate = day + "_" + month + "_" + year; //constructed our custom slotDate

      // making an api call(but for that we need coachId)
      const { data } = await axios.post(backendUrl + "/api/user/book-appointment", { coachId: coachID, slotDate, slotTime }, { headers: { token } });

      if (data.success) {
        toast.success(data.msg);
        getCoachesData(); //taki slots and dates update ho jaye
        navigate("/my-appointments");
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  // jaise hi page load ho fetchinfo function execute hona chaiye and jb bhi coachid change ho ya coaches change ho tb bhi
  useEffect(() => {
    fetchCoachInfo();
  }, [coaches, coachID]);

  // getting available slots as soon as page loads or coachInfo changes
  useEffect(() => {
    getAvailableSlots();
  }, [coachInfo]);

  useEffect(() => {
    console.log(coachSlots);
  }, [coachSlots]);

  return coachInfo && ( //agr coach info available h tbhi show krenge ye div
    <div>
      {/* Coach Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        {/* image div */}
        <div>
          <img className="bg-primary border border-black w-full sm:max-w-72 rounded-lg" src={coachInfo.image} alt="" />
        </div>

        {/* information div */}
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* name and verification icon */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {coachInfo.name} <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          {/* degree aur title ke liye */}
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{coachInfo.degree}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{coachInfo.experience}</button>
          </div>
          {/* About text */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{coachInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment Fees: <span className='text-gray-600'>{currencySymbol}{coachInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            coachSlots.length && coachSlots.map((items, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-primary text-white" : "border border-gray-200"}`} key={index}>
                {/* items[i] me slots h ith day ke 0th index pe current date h */}
                {/* hr slot me dattime h jisme date h formatted time  */}
                {
                  items[0] ?
                    <>
                      <p>{items[0] && daysOfWeek[items[0].datetime.getDay()]}</p>
                      <p>{items[0] && items[0].datetime.getDate()}</p>
                    </>
                    :
                    <>
                      <p>No Slots</p>
                      <p>Today</p>
                    </>
                }
              </div>
            ))
          }
        </div>

        {/* Slots Time available */}
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            coachSlots.length && coachSlots[slotIndex].map((item, index) => (
              <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time == slotTime ? "bg-primary text-white" : "text-gray-400 border border-gray-300"}`} key={index}>
                {item.time.toLowerCase()}

              </p>

            ))
          }
        </div>
        <button onClick={bookAppointmnet} className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book An Appointment</button>
      </div>
      <RelatedDoctors coachID={coachID} speciality={coachInfo.speciality} />
    </div>
  )
}

export default Appointment