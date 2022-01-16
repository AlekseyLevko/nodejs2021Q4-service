import { config } from './src/common/config';
import { Board } from './src/resources/boards/board.entity';
import { Task } from './src/resources/tasks/task.entity';
import { User } from './src/resources/users/user.entity';

export default {
  type: config.DB_TYPE,
  host: config.POSTGRES_HOST,
  port: config.POSTGRES_PORT,
  username: config.POSTGRES_USERNAME,
  password: config.POSTGRES_PASSWORD,
  synchronize: config.POSTGRES_SYNCHRONIZE,
  database: config.POSTGRES_USERNAME,
  entities: [User, Board, Task],
  logging: false,
};
