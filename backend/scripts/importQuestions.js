require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('../models/Question');

const questions = [
    {
        text: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correctAnswer: "Mercury",
        type: "mcq"
    },
    {
        text: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        correctAnswer: "Queue",
        type: "mcq"
    },
    {
        text: "Which of the following is primarily used for structuring web pages?",
        options: ["Python", "Java", "HTML", "C++"],
        correctAnswer: "HTML",
        type: "mcq"
    },
    {
        text: "Which chemical symbol stands for Gold?",
        options: ["Au", "Gd", "Ag", "Pt"],
        correctAnswer: "Au",
        type: "mcq"
    },
    {
        text: "Which of these processes is not typically involved in refining petroleum?",
        options: ["Fractional distillation", "Cracking", "Polymerization", "Filtration"],
        correctAnswer: "Filtration",
        type: "mcq"
    },
    {
        text: "What is the value of 12 + 28?",
        correctAnswer: "40",
        type: "integer"
    },
    {
        text: "How many states are there in the United States?",
        correctAnswer: "50",
        type: "integer"
    },
    {
        text: "In which year was the Declaration of Independence signed?",
        correctAnswer: "1776",
        type: "integer"
    },
    {
        text: "What is the value of pi rounded to the nearest integer?",
        correctAnswer: "3",
        type: "integer"
    },
    {
        text: "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
        correctAnswer: "120",
        type: "integer"
    }
];

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
};

const importData = async () => {
    try {
        await connectDB();
        await Question.deleteMany();
        await Question.insertMany(questions);
        console.log('Questions Imported!');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importData();
