'use client'


import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar, FaStarOfLife } from 'react-icons/fa';
import { GiDeathStar } from 'react-icons/gi';
import { PiStarFourFill } from 'react-icons/pi';

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value: number) => {
    setRating(value);
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;


        const handle = {
            click() { 
                handleRating(starValue)
            }
        }
        
        return <FaStar key={starValue} 
            onClick={() => handle.click()}
            className={`transition all ease-in-out text-[1.5rem] ${
                starValue <= rating ? 
                //  active styles!
                "text-neon" : 
                //  inactive styles
                "text-slate-900 stroke-slate-700 stroke-[2rem]"
            }`}
        />
        
        {/* 
          <svg
            onClick={() => handleRating(starValue)}
            className={`w-8 h-8 cursor-pointer ${
              starValue <= rating ? 'text-neon' : 'text-gray-400'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.194c.969 0 1.371 1.24.588 1.81l-3.395 2.463a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.395-2.463a1 1 0 00-1.175 0L4.92 17.066c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L.906 9.397c-.784-.57-.38-1.81.588-1.81h4.194a1 1 0 00.95-.69l1.286-3.97z" />
          </svg>
          </>
          */}
      })}
    </div>
  );
};

export default Rating;