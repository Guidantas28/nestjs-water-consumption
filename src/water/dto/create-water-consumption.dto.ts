import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateWaterConsumptionDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsDateString()
  date: string;
}
