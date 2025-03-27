'use client'
import React, { useState } from 'react'
import { FaUserFriends } from "react-icons/fa";
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";

const FlightBookingForm = () => {
     const [flightType, setFlightType] = useState('domestic');

     const [showDropdown, setShowDropdown] = useState(false);
  const [travellers, setTravellers] = useState(1);
     
  return (
    <div className="max-w-4xl mx-auto bg-white/50 rounded-xl shadow-lg p-6  md:mt-8 ">
  <div className="flex flex-wrap gap-4 mb-6  ">
    <button
      onClick={() => setFlightType('domestic')}
      className={`px-6 py-2 rounded-full ${
        flightType === 'domestic'
          ? 'bg-gray-600 text-white'
          : 'bg-gray-100 text-gray-600'
      }`}
    >
      Domestic Flights
    </button>

    <button
      onClick={() => setFlightType('international')}
      className={`px-6 py-2 rounded-full ${
        flightType === 'international'
          ? 'bg-gray-600 text-white'
          : 'bg-gray-100 text-gray-600'
      }`}
    >
      International Flights
    </button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative ">
    <input
      type="text"
      placeholder="From"
      className="w-full px-4 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-0"
    />
    <input
      type="text"
      placeholder="To"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-0"
    />







   {/* <div className="relative w-full">
     
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center justify-between w-full px-4 py-3 border rounded-lg shadow-md text-white cursor-pointer "
      >
        <div className="flex items-center gap-2">
          <FaUserFriends className="text-lg" />
          <span>Travellers {travellers}</span>
        </div>
        <IoIosArrowDown className="text-white" />
      </button>

      {showDropdown && (
        <div className="absolute left-0 mt-2 w-full bg-white/50 border rounded-lg shadow-md p-2 ">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md"
              onClick={() => {
                setTravellers(num);
                setShowDropdown(false);
              }}
            >
              {num} {num === 1 ? "Traveller" : "Travellers"}
            </div>
          ))}
        </div>
      )}
    </div>  */}

    <input
      type="date"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-0 "
    />
    <div>
      <button className="md:w-45 flex justify-center items-center md:gap-6 px-2 gap-2 bg-orange-500 ab text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300 cursor-pointer ">
        Search Flights <FaArrowRightLong />
      </button>
    </div>
  </div>
</div>

  )}


export default FlightBookingForm