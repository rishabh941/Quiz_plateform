const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: false
    },
    correctAnswer: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['mcq', 'integer'],
        required: true
    }
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
