export const SERVER_PORT = process.env.SERVER_PORT ?? 3001;
export const SERVER_HOST = `http://localhost:${SERVER_PORT}`;

// BASE DE DAOTS
export const DB = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
};
