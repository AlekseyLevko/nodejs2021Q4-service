import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BoardsController } from './boards/boards.controller';
import { BoardsModule } from './boards/boards.module';
import { Board } from './boards/entities/board.entity';
import config from './common/config';
import { FilesController } from './files/files.controller';
import { FilesControllerForFastify } from './files/files.controllerForFastify';
import { FilesModule } from './files/files.module';
import { Tables } from './migrations/Tables';
import { Task } from './tasks/entities/task.entity';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { User } from './users/entities/user.entity';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot({ load: [config] }),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule,
        LoggerModule.forRoot({
          pinoHttp: [
            {
              level:
                process.env.NODE_ENV !== 'production'
                  ? config().LOGGING_LEVEL
                  : 'info',
              transport:
                process.env.NODE_ENV !== 'production'
                  ? { target: 'pino-pretty' }
                  : undefined,
              useLevelLabels: true,
              serializers: {
                req(req: { raw: { body: string }; body: string }) {
                  req.body = req.raw.body;
                  return req;
                },
              },
            },
          ],
          forRoutes: [
            UsersController,
            TasksController,
            BoardsController,
            FilesController,
            FilesControllerForFastify,
          ],
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        synchronize: false,
        logging: false,
        migrationsRun: true,
        migrations: [Tables],
        entities: [User, Board, Task],
        cli: {
          migrationsDir: '../migrations',
        },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    TasksModule,
    BoardsModule,
    AuthModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
