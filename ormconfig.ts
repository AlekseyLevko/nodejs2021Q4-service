import { config } from './src/common/config';
import { User } from './src/resources/users/user.entity';

export default {
  type: config.DB_TYPE,
  host: 'host.docker.internal',
  port: config.POSTGRES_PORT,
  username: config.POSTGRES_USERNAME,
  password: config.POSTGRES_PASSWORD,
  synchronize: config.POSTGRES_SYNCHRONIZE,
  database: config.POSTGRES_USERNAME,
  entities: [User],
  logging: false,
};
