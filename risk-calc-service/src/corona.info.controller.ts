// Basic controller sample with a single route.
import { Controller, Get, Query, Req, Param } from '@nestjs/common';
import { CoronaInfoService } from './corona.info.service';
import { Request } from 'express';
import { Int, MapPosition, roundToInt } from './statics/types';

// TODO: Translate Messages to English

@Controller('corona')
export class CoronaInfoController {
    constructor(private readonly service: CoronaInfoService) {}

    @Get('data')
    async coronaData() {
        return this.service.findAll();
    }
}
