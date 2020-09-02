// The entry file of the application which uses the core function NestFactory to create a Nest application instance.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { __port__ } from './statics/constants';

const whitelist = ['http://localhost:3000', 'http://localhost:3001'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: function (origin, callback) {
      // see: https://stackoverflow.com/questions/42589882/nodejs-cors-middleware-origin-undefined
      if (!origin || whitelist.indexOf(origin) !== -1) {
        console.log("allowed cors for:", origin)
        callback(null, true)
      } else {
        console.log("blocked cors for:", origin)
        callback(new Error('Not allowed by CORS'))
      }
    },
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: "GET,PUT,POST,DELETE,UPDATE,OPTIONS",
    credentials: true,
    });
  await app.listen(__port__);
}
bootstrap();
