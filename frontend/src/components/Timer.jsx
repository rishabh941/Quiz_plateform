import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration); // Reset timer when duration changes
  }, [duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeout();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeout]);

  const calculateProgress = () => {
    return (timeLeft / duration) * 100;
  };

  return (
    <div className="absolute top-12 right-4 w-32">   {/* Adjusted top position */}
      <div className="relative w-full h-6 bg-gray-300 rounded-lg overflow-hidden shadow-md">
        <div 
          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-1000"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
      <span className="absolute top-1 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
        {timeLeft}s
      </span>
    </div>
  );
};

export default Timer;
