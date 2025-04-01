import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Navbar() {
  const navigate = useNavigate();
  
  const {token,setToken,userData} = useContext(AppContext);

  const logout = () =>{
    //logout me token ko clear krdiya and localstorage se bhi remove krdia kyunki hmne vha bhi add kra tha
    setToken(false);
    localStorage.removeItem("token");
  }

  return (
    <div className="relative z-50 flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <li className="py-1 group">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "text-primary" : "text-black")}
          >
            Home
          </NavLink>
          <hr className="pointer-events-none border-none h-0.5 bg-primary w-3/5 m-auto hidden group-hover:block" />
        </li>
        <li className="py-1 group">
          <NavLink
            to="/coaches"
            className={({ isActive }) => (isActive ? "text-primary" : "text-black")}
          >
            All Coaches
          </NavLink>
          <hr className="pointer-events-none border-none h-0.5 bg-primary w-3/5 m-auto hidden group-hover:block" />
        </li>
        <li className="py-1 group">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-primary" : "text-black")}
          >
            About
          </NavLink>
          <hr className="pointer-events-none border-none h-0.5 bg-primary w-3/5 m-auto hidden group-hover:block" />
        </li>
        <li className="py-1 group">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-primary" : "text-black")}
          >
            Contact
          </NavLink>
          <hr className="pointer-events-none border-none h-0.5 bg-primary w-3/5 m-auto hidden group-hover:block" />
        </li>
      </ul>
      <div className="flex items-center gap-4">
        {token &&userData? ( //agr userdata h tbhi dropdown menu hoga and image circle me dikhani h
          <div className="flex items-center gap-2 cursor-pointer group relative">
            {/* Logged-in user dropdown */}
            <img className="w-8 rounded-full" src={userData.image} alt="Profile" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">
                  My Profile
                </p>
                <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">
                  My Appointments
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
