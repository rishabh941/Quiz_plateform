import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchQuestions = async () => {
    const response = await axios.get(`${API_URL}/questions`);
    return response.data;
};

export const submitQuiz = async (answers) => {
    const response = await axios.post(`${API_URL}/submit`, { answers });
    return response.data;
};
