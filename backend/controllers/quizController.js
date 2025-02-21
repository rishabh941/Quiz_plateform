const Question = require('../models/Question');

// Get all questions
const getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        // Standardize the property name
        const formattedQuestions = questions.map(q => ({
            id: q._id,
            text: q.text,
            options: q.options,
            correctAnswer: q.correctAnswer,
            type: q.type
        }));
        res.json(formattedQuestions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Submit Quiz and Calculate Score
const submitQuiz = async (req, res) => {
    try {
        const userAnswers = req.body.answers;
        const questions = await Question.find();
        let score = 0;

        questions.forEach((question) => {
            if (userAnswers[question._id] == question.correctAnswer) {
                score++;
            }
        });

        res.json({ score });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getQuestions,
    submitQuiz
};
