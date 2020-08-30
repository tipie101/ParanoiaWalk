// Basic controller sample with a single route.
import { Controller, Get, Query, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { Int, MapPosition, roundToInt } from './statics/types';

function saveError(field: string, msg: string, errors: Array<any>) {
  // TODO: build a error-Object instead of this stub function
  errors.push({field: field, msg: msg});
}

// TODO: Translate Messages to English

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Req() req: Request): Promise<string> {
    
    const minutes: Int = roundToInt(+req.query.t);        
    const lat: number = +req.query.lat;
    const long: number = +req.query.long;
    
    const fieldErrors = [];
    if (isNaN(minutes)){
      fieldErrors.push({field: "minutes", msg: "NaN: invalid value"});
    }
    if (isNaN(lat)){
      fieldErrors.push({field: "lat", msg: "NaN: invalid value"});
    } else if (lat < -70 || lat > 80) {
      fieldErrors.push({field: "lat", msg: "Value not within [min, max]"});
    }
    if (isNaN(long)){
      fieldErrors.push({field: "long", msg: "NaN: ungültiger Wert"});
    } else if (long < 3 || long > 170) {
      fieldErrors.push({field: "long", msg: "Value not within [min, max]"});
    }

    if (fieldErrors.length > 0) {
      let errorOutput = "";
      for (const j in fieldErrors) {
        errorOutput += fieldErrors[j].msg + " - field: " + fieldErrors[j].field;
        errorOutput += "<br>"; 
      }
      return errorOutput;
    }

    // consider: https://developers.google.com/maps/documentation/javascript/examples/map-latlng-literal
    const positon: MapPosition = {lat: lat, long: long};

    return this.appService.arealRisk(minutes, positon);
  }

}
