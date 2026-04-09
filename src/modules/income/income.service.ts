import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddIncomeDto } from './dto/add-income.dto';
import { incomeDto } from './dto/income.dto';
import { Income } from './income.entity';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private readonly incomeRepository: Repository<Income>,
  ) {}

  findAll(): Promise<incomeDto[]> {
    return this.incomeRepository.find({
      order: { created_at: 'DESC' },
    });
  }

  create(payload: AddIncomeDto): Promise<incomeDto> {
    const income = this.incomeRepository.create(payload);
    return this.incomeRepository.save(income);
  }
}
