import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      json: true,
    }),
    cors: {
      origin: '*', // Example origin
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Example methods
    },
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
