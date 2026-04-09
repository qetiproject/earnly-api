import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddIncomeDto } from './dto/add-income.dto';
import { Income } from './income.entity';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private readonly incomeRepository: Repository<Income>,
  ) {}

  findAll(): Promise<Income[]> {
    return this.incomeRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  create(payload: AddIncomeDto): Promise<Income> {
    const income = this.incomeRepository.create(payload);
    return this.incomeRepository.save(income);
  }
}
