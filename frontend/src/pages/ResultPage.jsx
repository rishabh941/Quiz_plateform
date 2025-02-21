import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { saveQuizHistory, getQuizHistory } from '../utils/indexedDB';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score; // Optional chaining to avoid undefined error

  const [quizHistory, setQuizHistory] = useState([]);
  const hasSaved = useRef(false); // UseRef to prevent double saving

  // Redirect to home if score is undefined
  useEffect(() => {
    if (score === undefined) {
      navigate('/');
    } else {
      // Prevent double saving using useRef flag
      if (!hasSaved.current) {
        saveQuizHistory(score, 10);  // Save the score to IndexedDB
        hasSaved.current = true;
      }
    }
  }, [score, navigate]);

  // Fetch quiz history from IndexedDB
  useEffect(() => {
    const fetchHistory = async () => {
      const history = await getQuizHistory();
      setQuizHistory(history.reverse());
    };
    fetchHistory();
  }, []);

  // Dynamic message based on the score
  const getMessage = () => {
    if (score === 0) return "Oops! Better Luck Next Time!";
    if (score < 5) return "Good Try! Keep Practicing!";
    if (score < 8) return "Great Job! You're Almost There!";
    return "Excellent! You're a Quiz Master!";
  };

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <div className="w-full max-w-lg p-8 bg-blue-700 bg-opacity-10 rounded-2xl shadow-2xl backdrop-blur-md text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Your Score</h1>
        <p className="text-6xl font-bold text-yellow-300 mb-6 drop-shadow-lg">{score}</p>
        <p className="text-2xl font-semibold mb-8">{getMessage()}</p>
        
        <Link 
          to="/" 
          className="px-6 py-3 bg-green-400 text-gray-800 font-bold rounded-full shadow-lg hover:bg-green-500 transition-transform duration-300 transform hover:scale-105"
        >
          Go Home
        </Link>

        <h2 className="text-3xl font-extrabold text-white mt-10 mb-4">Quiz History</h2>
        <div className="overflow-y-auto max-h-60">
          {quizHistory.length > 0 ? (
            quizHistory.map((attempt, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-4 rounded-lg mb-3">
                <p className="text-lg text-yellow-300">Score: {attempt.score} / {attempt.total}</p>
                <p className="text-sm text-gray-400">Date: {attempt.date}</p>
                <p className="text-sm text-gray-400">Time: {attempt.time}</p>
              </div>
            ))
          ) : (
            <p className="text-lg text-gray-300">No quiz history available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
