// The root module of the application.
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EasyconfigModule } from  'nestjs-easyconfig';
import { CoronaInfoController } from './corona.info.controller';
import { CoronaInfoService } from './corona.info.service';
import { CoronaInfoModule } from './corona.info.module';

@Module({
  imports: [
    EasyconfigModule.register({path: './.env'}),
    TypeOrmModule.forRoot({}),
    CoronaInfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
