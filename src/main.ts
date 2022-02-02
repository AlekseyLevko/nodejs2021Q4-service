import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import config from './common/config';

async function bootstrap() {
  const app = config().USE_FASTIFY
    ? await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
      )
    : await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  await app.listen(config().PORT, '0.0.0.0');
}
bootstrap();
