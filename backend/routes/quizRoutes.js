const express = require('express');
const router = express.Router();
const { getQuestions, submitQuiz } = require('../controllers/quizController');

// Get all questions
router.get('/questions', getQuestions);

// Submit quiz and get score
router.post('/submit', submitQuiz);

module.exports = router;
