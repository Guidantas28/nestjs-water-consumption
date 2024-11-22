import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class WaterConsumption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column('float')
  amount: number;

  @Column('date')
  date: string;
}
