require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
connectDB();

app.use(cors({
    origin: 'http://localhost:5173'
}));


app.use(express.json());

app.use('/api', quizRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
