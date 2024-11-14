import { Injectable } from '@nestjs/common';
import { Repository, Between } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WaterConsumption } from '../water-consumption.entity';

@Injectable()
export class WaterService {
  constructor(
    @InjectRepository(WaterConsumption)
    private waterRepo: Repository<WaterConsumption>,
  ) {}

  createRecord(record: Partial<WaterConsumption>) {
    return this.waterRepo.save(record);
  }

  getHistory(userId: number, startDate: string, endDate: string) {
    return this.waterRepo.find({
      where: { userId, date: Between(startDate, endDate) },
    });
  }

  async checkAlert(userId: number): Promise<boolean> {
    const records = await this.waterRepo.find({
      where: { userId },
      order: { date: 'DESC' },
      take: 2,
    });

    if (records.length < 2) return false;
    return records[0].amount > records[1].amount;
  }
}
