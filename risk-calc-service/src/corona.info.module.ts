
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoronaInfoService } from './corona.info.service';
import { CoronaInfoController } from './corona.info.controller';
import { CoronaInfo } from './entities/CoronaInfo';

@Module({
  imports: [TypeOrmModule.forFeature([CoronaInfo])],
  providers: [CoronaInfoService],
  controllers: [CoronaInfoController],
  exports: [TypeOrmModule]
})
export class CoronaInfoModule {}