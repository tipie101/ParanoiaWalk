// Basic controller sample with a single route.

import { Controller, Get, Query, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('hi')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    const name = "" + req.query.id;
    return this.appService.getHello(name);
  }

}
