import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class WaterConsumption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() // Este campo não pode ser nulo
  userId: number;

  @Column('float')
  amount: number;

  @Column('date')
  date: string;
}
