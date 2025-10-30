import dotenv from 'dotenv';

// Dynamically choose which .env file to load
const envFile = `.env.${process.env.NODE_ENV || 'development'}.local`;

dotenv.config({ path: envFile });

export const PORT = process.env.PORT;
export const CONNECTION_STRING = process.env.CONNECTION_STRING;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const DB_URI = process.env.DB_URI || '';

// (optional) log which env file was loaded
