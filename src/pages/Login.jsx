import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from "axios"; //for making api calls
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
const Login = () =>{
  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // navigate hook to redirecrt the user to home page once it is logged in
  const navigate = useNavigate();

  // destructuring token setToKEN and backendurl for calling api of login/signup on submit of form
  const { backendUrl, token, setToken } = useContext(AppContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    console.log("Attempting to submit:", { state, name, email, password }); // Log user input ✅

    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + "/api/user/register", { name, password, email });
        console.log("Signup API Response:", data); // Log API response ✅

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.msg);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", { email, password });
        console.log("Login API Response:", data); // Log API response ✅

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.msg);
        }
      }
    } catch (error) {
      console.log("API Error:", error.response?.data || error.message); // Log error ✅
      toast.error(error.message);
    }
  };

  useEffect(()=>{
    // agr user logged in and has a token redirect it to home page
    if(token){
      navigate("/");
    }

  },[token])


  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "login"} to Book Appointment</p>

        {
          // agr signup h tbhi full name vala div dikhana h
          state === "Sign Up"
            ?
            <div className='w-full'>
              <p>Full Name</p>
              <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            :
            <></>
        }

        <div className='w-full'>
          <p>Email</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <button type="submit" className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
            ? <p>Already have an account ? <span onClick={(e) => setState("Log In")} className='text-primary underline cursor-pointer'>Login Here</span></p>
            : <p>Create a new account ? <span onClick={(e) => setState("Sign Up")} className='text-primary underline cursor-pointer'>Sign Up Here</span></p>

        }
      </div>
    </form>
  )
}

export default Login