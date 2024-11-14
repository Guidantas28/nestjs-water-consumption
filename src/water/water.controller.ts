import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { WaterService } from './water.service';
import { CreateWaterConsumptionDto } from './dto/create-water-consumption.dto';

@Controller('water')
export class WaterController {
  constructor(private readonly waterService: WaterService) {}

  @Post('record')
  createRecord(@Body() body: CreateWaterConsumptionDto) {
    return this.waterService.createRecord(body);
  }

  @Get('history')
  getHistory(
    @Query('userId') userId: number,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.waterService.getHistory(userId, startDate, endDate);
  }

  @Get('alert')
  checkAlert(@Query('userId') userId: number) {
    return this.waterService.checkAlert(userId);
  }
}
