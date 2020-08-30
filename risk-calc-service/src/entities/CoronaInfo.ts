//    id country district active_cases population
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm'

@Entity()
@Unique(["country", "district"])
export class CoronaInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;
  
  @Column()
  district: string;

  @Column()
  active_cases: number;  
  
  @Column()
  population: number;
}

