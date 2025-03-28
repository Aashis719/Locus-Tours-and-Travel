"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import testimonials from "../Components/Testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return <p className="text-white">No testimonials available.</p>;
  }

  const currentTestimonial = testimonials[index] || {};
  const { name = "Unknown", post = "Guest", review = "No review available.", rating = 0, image = "" } = currentTestimonial;

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-blue-200/50 px-5 md:px-20 py-30 flex flex-col items-center text-gray-700" id="testimonials">
      <div className="text-center">
        <div className="text-yellow-400 text-2xl mb-2 flex justify-center">{renderStars(rating)}</div>
        <h2 className="text-3xl font-bold text-orange-500">Don’t take our word for it. Take theirs.</h2>
      </div>
      <div className="relative w-full max-w-3xl mt-6">
        <button
          onClick={prevTestimonial}
          className="absolute  top-5/6  md:top-60 md:right-105 -translate-y-1/2 bg-white p-3 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Motion div for sliding effect */}
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center px-6 bg-white p-6 rounded-lg shadow-md"
        >
          <p className="text-lg italic">“{review}”</p>
          <div className="mt-4 flex items-center justify-center">
            <img
              src={image || "/default-avatar.png"}
              alt={name}
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-700">{post}</p>
            </div>
          </div>
        </motion.div>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-5/6  md:top-60 md:right-75 -translate-y-1/2 bg-white p-3 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="mt-4 flex space-x-2">
        {testimonials.map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-600"}`}></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
