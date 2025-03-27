'use client'
import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { Plane } from 'lucide-react';

const Services = () => {
  return (

    // bg-gradient-to-b from-purple-300 to-white
    <section id="services" className="py-16 bg-white text-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white service-box rounded-xl shadow-md hover:shadow-xl transition duration-300 group relative">
          <Plane className="h-12 w-12 text-orange-500 mb-4 rotate-50 group-hover:rotate-10 cursor-pointer hover:text-orange-600 duration-300" />
          <h3 className="text-xl font-semibold mb-2">Flight Booking</h3>
          <p className="text-gray-600">Book domestic and international flights at competitive prices.</p>
        </div>
        <div className="p-6 bg-white service-box rounded-xl shadow-md hover:shadow-xl transition duration-300 group relative">
          <FaSuitcaseRolling  className="h-12 w-12 text-orange-500 mb-4 group-hover:rotate-15 cursor-pointer hover:text-orange-600 duration-300" />
          <h3 className="text-xl font-semibold mb-2">Travel Packages</h3>
          <p className="text-gray-600">Customized travel packages for your dream destinations.</p>
        </div>
        <div className="p-6 bg-white service-box rounded-xl shadow-md hover:shadow-xl transition duration-300 group relative">
          <TfiHeadphoneAlt className="h-12 w-12 text-orange-500 mb-4 group-hover:rotate-15 cursor-pointer hover:text-orange-600 duration-300" />
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Round-the-clock customer support for all your travel needs.</p>
        </div>
      </div>
    </div>

    {/* Experiences section  */}
  </section>
  )
}

export default Services