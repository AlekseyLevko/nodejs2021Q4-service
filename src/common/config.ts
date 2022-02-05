import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({
  path: join(__dirname, '../../.env'),
});

export default () => ({
  PORT: Number(process.env.PORT) || 4000,
  USE_FASTIFY: process.env.USE_FASTIFY === 'true',
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true',
  LOGGING_LEVEL: process.env.LOGGING_LEVEL || 'info',
  DB_TYPE: process.env.DB_TYPE || 'postgres',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_HOST: process.env.POSTGRES_HOST || 'postgres',
  POSTGRES_USERNAME: process.env.POSTGRES_USERNAME || 'postgres',
  POSTGRES_PORT: Number(process.env.POSTGRES_PORT),
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  SALT_ROUNDS: Number(process.env.SALT_ROUNDS) || 10,
});
