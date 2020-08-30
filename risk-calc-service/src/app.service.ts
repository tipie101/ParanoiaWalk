import { Injectable } from '@nestjs/common';
import { Int, MapPosition, roundToInt } from './statics/types';
import axios, { AxiosResponse } from 'axios';

function averageContactsPerMinute(position: MapPosition, hour: Int) {
  // compute via area and people around in average
  return 1;
}

function percentageCoronaCases(position: MapPosition) {
  // greyscaleFactor could actually vary depending on testing activity of the area
  // compute via (Haibitants Total / Corona Cases) * greyscaleFactor  
  return 0.019;
}

async function fetchCurrentHour(position: MapPosition): Promise<Int> {
  const dateTimeFormatted: string = await axios.get(
    "http://api.timezonedb.com/v2.1/get-time-zone?key=" + process.env.APIKEY_TIMEZONEDB
    + "&format=json&by=position&lat="
    + position.lat + "&lng=" + position.long
    )
      // specify return-type more ???
      .then((res: AxiosResponse<any>) => {
        return res.data.formatted;
      });
  console.log(dateTimeFormatted);

  const time: string = dateTimeFormatted.slice(dateTimeFormatted.indexOf(" ") + 1); 
  const hour: number = +time.slice(0, time.indexOf(":"));
  return roundToInt(hour);
}

@Injectable()
export class AppService {
  async arealRisk(minutes: number, position: MapPosition): Promise<string> {
    // current hour on the clock depending on position ofc
    const hour: Int = await fetchCurrentHour(position);

    const numStrangers: number = averageContactsPerMinute(position, hour);
    const probability: number = percentageCoronaCases(position);
    const contacts: Int = roundToInt(minutes * numStrangers * probability);

    return 'Hello, you supposedly met ' + contacts + ' people with corona on your way';
  }
}
