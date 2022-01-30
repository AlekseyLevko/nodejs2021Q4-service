import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { Board } from './boards/entities/board.entity';
import { config } from './common/config';
import { Tables1642614560539 } from './migrations/1642614560539-Tables';
import { Task } from './tasks/entities/task.entity';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: config.DB_TYPE as 'postgres',
      host: config.POSTGRES_HOST,
      port: config.POSTGRES_PORT,
      username: config.POSTGRES_USERNAME,
      password: config.POSTGRES_PASSWORD,
      database: 'postgres',
      synchronize: config.POSTGRES_SYNCHRONIZE,
      logging: config.POSTGRES_LOGGING,
      migrationsRun: true,
      migrations: [Tables1642614560539],
      entities: [User, Board, Task],
      cli: {
        migrationsDir: '../migrations',
      },
    }),
    UsersModule,
    TasksModule,
    BoardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
