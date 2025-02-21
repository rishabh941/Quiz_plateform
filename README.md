# Interactive Quiz Platform

An interactive quiz platform built with **React**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB**. This platform allows users to attempt quizzes, get instant feedback, and track their progress with a dynamic scoreboard. Quiz history is saved using **IndexedDB**, allowing users to view past attempts even after refreshing the browser.

---

## 🎨 Demo

**Live Demo:** [Click Here](https://quiz-plateform-frontend.onrender.com)

---

## 📚 Features

- **Quiz Creation & Management**:
  - Dynamic quizzes loaded from MongoDB.
  - Support for multiple-choice questions and integer-based answers.
  - Timer-based quizzes with 30 seconds per question.
  - Multiple attempts allowed with instant feedback.

- **User Interaction**:
  - User-friendly interface with modern UI design.
  - Instant feedback after each answer.
  - Timer resets for each question.
  - Skip to the next question if time expires.

- **Progress Tracking**:
  - Scoreboard displayed at the end of each quiz.
  - Dynamic messages based on the user's score.

- **Bonus Features**:
  - Quiz history saved using **IndexedDB**.
  - Persistent history even after refreshing the browser.
  - View past attempts with date and time.

---

## 🛠️ Tech Stack

### Frontend:
- **React** - User Interface
- **Tailwind CSS** - Styling and responsive design
- **React Router** - Navigation

### Backend:
- **Node.js** - Server-side runtime
- **Express** - Web framework
- **MongoDB** - Database for quiz questions

### Additional Libraries:
- **idb** - For IndexedDB integration
- **axios** - For API requests

---

## 📥 Installation and Setup

### Prerequisites:
- **Node.js** (v14 or higher)
- **MongoDB** (Running locally or using a cloud service like MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Quiz_platform.git
cd Quiz_platform
```

### 2. Install Dependencies

#### Backend:

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install
```

#### Frontend:

```bash
# Open a new terminal and navigate to the frontend directory
cd frontend

# Install dependencies
npm install
```

This will install all the necessary Node.js packages required for both the frontend and backend to run.

### 3. Environment Configuration

Create a `.env` file in the `backend` directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

- **PORT**: The port where your backend server will run.
- **MONGO_URI**: MongoDB connection string. Use one of the following:

#### Local MongoDB:
If running MongoDB locally, use:

```env
MONGO_URI=mongodb://localhost:27017/quiz-platform
```

#### MongoDB Atlas:
If using MongoDB Atlas, get your connection string from the Atlas dashboard and replace `<username>`, `<password>`, and `<cluster-url>` with your credentials:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/quiz-platform?retryWrites=true&w=majority
```

### 4. Running the Application Locally

#### Start Backend Server:

Open a terminal and navigate to the backend directory:

```bash
# Navigate to backend directory
cd backend

# Start the backend server
npm start
```

The backend server will run at: [http://localhost:5000](http://localhost:5000)

#### Start Frontend Development Server:

Open a new terminal and navigate to the frontend directory:

```bash
# Navigate to frontend directory
cd frontend

# Start the frontend development server
npm start
```

The frontend will run at: [http://localhost:3000](http://localhost:3000)
