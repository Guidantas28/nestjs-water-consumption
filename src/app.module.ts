import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterConsumption } from './water-consumption.entity';
import { WaterModule } from './water/water.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../src/water', 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'water-consumption.db',
      entities: [WaterConsumption],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([WaterConsumption]),
    WaterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
