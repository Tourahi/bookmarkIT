import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


if (process.env.NODE_ENV || process.env.NODE_ENV === 'prod') {
  require('module-alias/register');
}

async function bootstrap() {
  const APP_PORT = process.env.APP_PORT;

  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('BookmarkIT')
    .setDescription('BookmarkIT API desc')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(APP_PORT, () => {
    console.log(`===>>>> Server is running on port ${APP_PORT}`);
    console.log(`===>>>> DB URL ${process.env.DATABASE_URL}`);
  }
  );
}

bootstrap();
