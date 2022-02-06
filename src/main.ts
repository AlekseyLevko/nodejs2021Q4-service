import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import fmp from 'fastify-multipart';
import { AppModule } from './app.module';
import config from './common/config';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter();
  fastifyAdapter.register(fmp);

  const app = config().USE_FASTIFY
    ? await NestFactory.create<NestFastifyApplication>(
        AppModule,
        fastifyAdapter,
      )
    : await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest api')
    .setDescription('Available routes for Nest api')
    .setVersion('1.0')
    .addTag('RS')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('doc', app, document);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(config().PORT, '0.0.0.0');
}
bootstrap();
