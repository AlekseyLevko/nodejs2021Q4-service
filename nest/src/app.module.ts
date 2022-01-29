import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsController } from './boards/boards.controller';
import { Board } from './boards/boards.entity';
import { config } from './common/config';
import { TasksController } from './tasks/tasks.controller';
import { Task } from './tasks/tasks.entity';
import { UsersController } from './users/users.controller';
import { User } from './users/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: config.POSTGRES_PORT,
      username: 'postgres',
      password: 'secretPassword123',
      database: 'postgres',
      entities: [User, Board, Task],
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    UsersController,
    TasksController,
    BoardsController,
  ],
  providers: [AppService],
})
export class AppModule {}
