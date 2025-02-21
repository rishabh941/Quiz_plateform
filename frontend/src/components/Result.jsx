import React from 'react';

const Scoreboard = ({ score, total, onRetry }) => {
  return (
    <div className="min-h-screen min-w-screen text-center p-6 bg-green-100 rounded shadow my-4">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg text-green-300">
        Your Score: {score} / {total}
      </p>
      <button
        onClick={onRetry}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
};

export default Scoreboard;
