import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          Interactive Quiz Platform
        </h1>
        <p className="text-xl mb-8 font-light text-gray-200">
          Test your knowledge with fun and challenging quizzes!
        </p>
        <Link 
          to="/quiz" 
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
