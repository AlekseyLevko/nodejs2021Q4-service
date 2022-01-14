import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const config = {
  PORT: process.env.PORT || 4000,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true',
  LOGGING_LEVEL: process.env.LOGGING_LEVEL || 'info',
  DB_TYPE: process.env.DB_TYPE || 'postgres',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
  POSTGRES_USERNAME: process.env.POSTGRES_USERNAME || 'postgres',
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_SYNCHRONIZE: process.env.POSTGRES_SYNCHRONIZE === 'true',
  POSTGRES_LOGGING: process.env.POSTGRES_LOGGING === 'true',
};
