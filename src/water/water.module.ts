import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterConsumption } from '../water-consumption.entity'; // Importar a entidade
import { WaterService } from './water.service';
import { WaterController } from './water.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WaterConsumption])], // Registrar a entidade
  controllers: [WaterController],
  providers: [WaterService],
  exports: [TypeOrmModule], // Exportar caso outro módulo precise da entidade
})
export class WaterModule {}
