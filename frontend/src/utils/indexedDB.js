import { openDB } from 'idb';

const DB_NAME = 'QuizAppDB';
const STORE_NAME = 'QuizHistory';

// Open IndexedDB
const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    }
  },
});

// Save Quiz History
export const saveQuizHistory = async (score, total) => {
  const db = await dbPromise;
  const date = new Date();
  const attempt = {
    score,
    total,
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString(),
  };
  await db.add(STORE_NAME, attempt);
};

// Get All Quiz History
export const getQuizHistory = async () => {
  const db = await dbPromise;
  return await db.getAll(STORE_NAME);
};
