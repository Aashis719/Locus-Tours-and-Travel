"use client";
import React, { useState } from "react";
import testimonials from "../Components/Testimonials"; // Ensure this is correctly imported
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  // Check if testimonials exist before using them
  if (!testimonials || testimonials.length === 0) {
    return <p className="text-white">No testimonials available.</p>;
  }

  // Get the current testimonial safely
  const currentTestimonial = testimonials[index] || {};
  const { name = "Unknown", post = "Guest", review = "No review available.", rating = 0, image = "" } = currentTestimonial;

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to generate dynamic star ratings
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
    <div className=" bg-blue-200/50  px-5 md:px-20 py-20 flex flex-col items-center text-gray-700" id="testimonials">
      <div className="text-center">
        <div className="text-yellow-400 text-2xl mb-2 flex justify-center">{renderStars(rating)}</div>
        <h2 className="text-3xl font-bold text-orange-500">Don’t take our word for it. Take theirs.</h2>
      </div>
      <div className="relative w-full max-w-3xl mt-6">
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/90 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="text-center px-6">
          <p className="text-lg italic">“{review}”</p>
          <div className="mt-4 flex items-center justify-center">
            <img
              src={image || "/default-avatar.png"} // Fallback if image is missing
              alt={name}
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-700">{post}</p>
            </div>
          </div>
        </div>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/90 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 " />
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
