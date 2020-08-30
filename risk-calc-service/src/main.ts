// The entry file of the application which uses the core function NestFactory to create a Nest application instance.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { __port__ } from './statics/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(__port__);
}
bootstrap();
