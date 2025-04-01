import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

function MyProfile() {
  
  const {userData,setUserData,token,backendUrl,loadUserProfileData} = useContext(AppContext);

  // state variable to track is editable or not
  const [isEditable, setIsEditable] = useState(false);

  // state variable for storing user's image
  const [image,setImage] = useState(false);

  // function for updating user profile data
  const updateUserProfileData = async() =>{

    // making an api call we have a route in backend for "update-profile";
    try {
      // hm formdata bhejenge kyunki hme imagefile bhi bhejni h aur hmne backend me multer use kiya as middleware
      const formData = new FormData();
      // is formdata se userdata ko update krdenge to profile rerender hogi and backend me change krne ke liye api call bhi krdenge
      formData.append("name",userData.name);
      formData.append("phone",userData.phone);
      formData.append("address",JSON.stringify(userData.address));
      formData.append("gender",userData.gender);
      formData.append("dob",userData.dob);

      image&&formData.append("image",image); //agr image state variable me h image tbhi formdata me append krenge for updation vrna nhi


      const {data} = await axios.post(backendUrl+"/api/user/update-profile",formData,{headers:{token}});

      if(data.success){
        toast.success(data.msg);
        await loadUserProfileData(); //update ke badd loaduserprofile data call
        setIsEditable(false); //toggling to save state
        setImage(false); //upload icon ht jaye image se uske liye
      }else{
        toast.error(data.msg);
      }
    } catch (error) {

      console.log(error);
      toast.error(error.message);
    }

  }

  return userData&&(
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

      {
        isEditable
        ? <label htmlFor="image">
          <div className='inline-block relative cursor-pointer'>
            <img className="w-36 rounded opacity-75"src={image? URL.createObjectURL(image):userData.image} alt="" />
            <img className="w-10 absolute bottom-9 right-12" src={image? "":assets.upload_icon} alt="" />
          </div>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden/>
          {/* input field vo dikhna nhi chaiye label for se input element vvhi image pe refer krva liya */}
        </label>
        :
        <img className="w-36 rounded" src={userData.image} alt="" />
      }
      {
        isEditable
          ?
          <input className="bg-red-50 text-3xl font-medium max-w-60 mt-4" type="text" value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          :
          <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className="bg-zinc-400 h-[1px] border-none"/>
      <div>
        <p className='text-neutral-500 underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id : </p>
          <p className='text-primary'>{userData.email}</p>
          <p className='font-medium'>Phone : </p>
          {
            isEditable
              ?
              <input className="bg-red-50 max-w-52" type="text" value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              :
              <p className='text-primary'>{userData.phone}</p>
          }

          <p className='font-medium'>Address : </p>
          {
            isEditable
              ?
              <>
                <input className="bg-red-50" type="text" value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
                <br />
                <input className="bg-red-50" type="text" value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
              </>
              :
              <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>Basic Info</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender : </p>
          {
            isEditable
              ?
              <select className="max-w-20 bg-red-50" value={userData.gender} onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              :
              <p className="text-gray-500">{userData.gender}</p>
          }

          <p className='font-medium'>Birtday : </p>
          {
            isEditable
              ?
              <input className="max-w-28 bg-red-50" type="date" value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
              :
              <p className='text-gray-500'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEditable
            ?
            <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={updateUserProfileData}>Save Information</button>
            :
            <button className="border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all" onClick={(e)=>setIsEditable(true)}>Edit</button>
        }

      </div>

    </div>
  )
}

export default MyProfile