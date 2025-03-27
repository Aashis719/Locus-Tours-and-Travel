'use client';

import { useEffect, useState } from 'react';
// import { Plane, Phone, Mail, MapPin, Star, ChevronDown, Menu, X, Contact } from 'lucide-react';
import { GiOctogonalEye } from "react-icons/gi";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { PiMountains } from "react-icons/pi";
import destination from '../../Components/Destinations';
import { MdLocationOn } from "react-icons/md";
import Services from '../../Components/Services';
import Navbar from '../../Components/Navbar';
import TestimonialSection from '../../Components/TestimonialSection';
import FlightBookingForm from '../../Components/FlightBookingForm';

export default function Home() {

  return (
    <div className="min-h-screen bg-white text-gray-200">
      {/* Navigation */}
    <Navbar/>

      {/* Hero Section */}
      {/* <section id="home" className="pt-20 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50"> */}
      <section id="home" className="pt-20 pb-12 h-screen ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videowalla.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10   absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Explore the World with <span className="text-orange-500">Locus Tours</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Your trusted partner for domestic and international travel
            </p>
          </div>

          {/* Flight Booking Form */}
          <FlightBookingForm/>
        </div>
      </section>

      {/* Services Section */}
     <Services/>

      {/* Unforgettable Experiences */}
      <section className="bg-white md:px-6 py-10" id="experiences">
  <div>
    <h1 className="text-center text-gray-700 text-3xl font-bold">Unforgettable Experiences</h1>

    {/* Carousel Wrapper */}
    <div className="w-full relative overflow-hidden py-10 ">
    <div className="flex gap-5 justify-start md:justify-center items-center overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide p-4">
        
        {/* Beach Gateways */}
        <div className="w-52 md:w-72 flex-shrink-0 snap-start relative group cursor-pointer hover:scale-105 duration-300  ">
          <img src="/efoto2.jpeg" className="rounded-2xl w-full" alt="Beach" />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <LiaUmbrellaBeachSolid className="text-2xl mb-3 text-yellow-600" />
            <h2 className="font-bold">Beach Gateways</h2>
            <p className="italic text-sm">A tranquil escape where the ocean meets the land...</p>
          </div>
        </div>

        {/* Cultural Experiences */}
        <div className="w-52 md:w-72 flex-shrink-0 snap-start relative group cursor-pointer hover:scale-105 duration-300">
          <img src="/efoto4.jpeg" className="rounded-2xl w-full" alt="Culture" />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <GiOctogonalEye className="text-2xl mb-3" />
            <h2 className="font-bold">Cultural Experiences</h2>
            <p className="italic text-sm">Indian culture is a vibrant blend of traditions, festivals...</p>
          </div>
        </div>

        {/* Mountain Adventures */}
        <div className="w-52 md:w-72 flex-shrink-0 snap-start relative group cursor-pointer hover:scale-105 duration-300">
          <img src="/efoto3.jpeg" className="rounded-2xl w-full" alt="Mountain" />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PiMountains className="text-2xl mb-3 text-green-700" />
            <h2 className="font-bold">Mountain Adventures</h2>
            <p className="italic text-sm">A mountain is a majestic natural wonder...</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* Popular Destinations  */}
        <section>
                <div className='py-10 text-gray-700' >
                  <h1 className='text-3xl text-center text-gray-700 font-bold'>Popular Destinations</h1>
                  <div className=' p-10 flex gap-4 flex-wrap justify-center '>
                  {destination.map((place, index) => (
        <div key={index} className=" rounded-lg overflow-hidden shadow-lg w-70 hover:scale-103 duration-200 cursor-pointer">
          <img src={place.image} alt={place.place} className="w-full h-64 object-cover" loading="lazy" />
          <div className="p-4 ">
            <h2 className="text-xl font-semibold">{place.place}</h2>
            <p className="text-gray-600 flex items-center italic"> <MdLocationOn className='text-red-600' />{place.location}</p>
            <p className="text-green-500 font-bold">{place.price}</p>
          </div>
        </div>
      ))}
                    
                  </div>
                </div>

        </section>





      {/* Testimonials Section */}
      <TestimonialSection/>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Locus Tours</h3>
              <p className="text-gray-400">Your trusted travel partner since 2024</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Domestic Flights</li>
                <li className="text-gray-400">International Flights</li>
                <li className="text-gray-400">Travel Packages</li>
                <li className="text-gray-400">Travel Insurance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 Locus Tours. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}