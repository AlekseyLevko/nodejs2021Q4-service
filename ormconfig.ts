import { join } from 'path';
import { ConnectionOptions } from 'typeorm';
import { config } from './src/common/config';

export default {
  type: config.DB_TYPE as 'postgres',
  host: config.POSTGRES_HOST,
  port: Number(config.POSTGRES_PORT),
  username: config.POSTGRES_USERNAME,
  password: config.POSTGRES_PASSWORD,
  synchronize: config.POSTGRES_SYNCHRONIZE,
  database: config.POSTGRES_USERNAME,
  logging: config.POSTGRES_LOGGING,
  migrationsRun: true,
  migrations: [join(__dirname, './src/migrations/*{.ts, .js}')],
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  cli: {
    migrationsDir: './src/migrations',
  },
} as ConnectionOptions;
