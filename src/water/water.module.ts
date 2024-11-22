import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterConsumption } from '../water-consumption.entity';
import { WaterService } from './water.service';
import { WaterController } from './water.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WaterConsumption])],
  controllers: [WaterController],
  providers: [WaterService],
  exports: [TypeOrmModule],
})
export class WaterModule {}
