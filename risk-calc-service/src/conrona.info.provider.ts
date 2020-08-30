
import { Connection, Repository } from 'typeorm';
import { CoronaInfo } from './entities/CoronaInfo';

export const photoProviders = [
  {
    provide: 'CORONA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(CoronaInfo),
    inject: ['DATABASE_CONNECTION'],
  },
];