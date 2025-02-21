import React, { useState, useEffect } from 'react';
import Question from './Question';
import Scoreboard from './Result';
import History from './History';
import quizData from '../data/quizData.json';
import { saveAttempt } from '../api/api';
import { addAttemptIDB, getAttemptsIDB } from '../api/indexedDB';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState([]);

  // Load saved attempts from IndexedDB on component mount
  useEffect(() => {
    const loadAttempts = async () => {
      const storedAttempts = await getAttemptsIDB();
      setAttempts(storedAttempts);
    };
    loadAttempts();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Move to next question or finish quiz
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Calculate final score (if the last question is answered correctly)
      const finalScore = isCorrect ? score + 1 : score;
      const attempt = { score: finalScore, date: new Date().toISOString() };

      // Update local state history
      setAttempts((prev) => [...prev, attempt]);

      // Save attempt to backend
      saveAttempt(attempt).catch((err) => console.error(err));

      // Save attempt to IndexedDB
      addAttemptIDB(attempt)
        .then(() => getAttemptsIDB())
        .then(setAttempts)
        .catch((err) => console.error(err));
    }
  };

  const handleRetry = () => {
    setScore(0);
    setCurrentIndex(0);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      {currentIndex < quizData.length ? (
        <Question data={quizData[currentIndex]} onAnswer={handleAnswer} />
      ) : (
        <Scoreboard score={score} total={quizData.length} onRetry={handleRetry} />
      )}
      <History attempts={attempts} />
    </div>
  );
};

export default Quiz;
