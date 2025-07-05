export const SERVER_PORT = process.env.SERVER_PORT ?? 3001;
export const SERVER_HOST = `http://localhost:${SERVER_PORT}`;

export const SERVER_IA = process.env.SERVER_IA ?? "http://localhost:8000";

// BASE DE DAOTS
export const DB = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
};

// CLOUDINARY
export const CLOUDINARY = {
  name: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  url: process.env.CLOUDINARY_URL,
};

// GÉMINI AI
export const GEMINI_AI_API_KEY = process.env.GEMINI_AI_API_KEY;
