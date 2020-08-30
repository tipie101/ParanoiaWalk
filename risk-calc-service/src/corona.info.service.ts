
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoronaInfo } from './entities/CoronaInfo';

@Injectable()
export class CoronaInfoService {
  constructor(
    @InjectRepository(CoronaInfo)
    private coronaRepository: Repository<CoronaInfo>,
  ) {}

  findAll(): Promise<CoronaInfo[]> {
    return this.coronaRepository.find();
  }

  findOne(id: string): Promise<CoronaInfo> {
    return this.coronaRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.coronaRepository.delete(id);
  }

}

