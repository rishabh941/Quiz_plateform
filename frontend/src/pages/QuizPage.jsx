import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/questions`);
      const data = await response.json();
      setQuestions(data);
    };
    getQuestions();
  }, []);

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (answer.toString().toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    navigate('/result', { state: { score } });
  };

  if (questions.length === 0) return <div>Loading...</div>;

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      
      {/* Question Counter in Top-Right Corner */}
      <div className="fixed top-2 right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-md">
        Question: {currentQuestion + 1} / {questions.length}
      </div>

      <div className="w-full max-w-lg p-6 bg-cardBg rounded-2xl shadow-xl border border-accent relative">
        <h1 className="text-3xl font-extrabold text-accent mb-2">Quiz Time!</h1>
        <p className="text-md text-textSecondary mb-4">Let's see how much you know!</p>

        <hr className="border-t border-accent my-4" />

        <h2 className="text-xl font-bold mb-4">{currentQuestion + 1}. {question.text}</h2>

        {question.type === 'mcq' && (
          <ul className="space-y-3">
            {question.options.map((option, index) => (
              <li key={index}>
                <button 
                  onClick={() => {
                    handleAnswer(question._id, option);
                    handleNextQuestion();
                  }}
                  className={`w-full py-2 px-4 rounded-lg border-2 
                    ${answers[question._id] === option ? 'border-highlight' : 'border-accent'}
                    text-left hover:bg-opacity-25 transition-all duration-300`}
                >
                  <span className="font-semibold">{String.fromCharCode(65 + index)}. </span>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}

        {question.type === 'integer' && (
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your answer"
              value={answers[question._id] || ''}
              onChange={(e) => handleAnswer(question._id, e.target.value)}
              className="border-2 border-accent bg-transparent rounded-lg p-2 w-full text-white focus:outline-none focus:border-highlight"
            />
          </div>
        )}

        <Timer 
          key={currentQuestion} 
          duration={30} 
          onTimeout={handleNextQuestion} 
        />

        <div className="flex justify-end mt-6">
          {currentQuestion < questions.length - 1 ? (
            <button 
              onClick={handleNextQuestion} 
              className="bg-accent text-white font-semibold px-4 py-2 rounded-full shadow-neon hover:scale-105 transition duration-300"
            >
              Next
            </button>
          ) : (
            <button 
              onClick={handleSubmit} 
              className="bg-accent text-white font-semibold px-4 py-2 rounded-full shadow-neon hover:scale-105 transition duration-300"
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
