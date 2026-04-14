import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddIncomeDto } from './dto/add-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { Income, Status } from './income.entity';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private readonly incomeRepository: Repository<Income>,
  ) {}

  findAll(page = 1, limit = 10): Promise<Income[]> {
    return this.incomeRepository.find({
      order: { createdAt: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  create(payload: AddIncomeDto): Promise<Income> {
    const income = this.incomeRepository.create(payload);
    return this.incomeRepository.save(income);
  }

  async update(id: number, payload: Partial<UpdateIncomeDto>): Promise<Income> {
    const income = await this.incomeRepository.findOneBy({ id });
    if (!income) {
      throw new NotFoundException(`Income with id ${id} not found`);
    }

    Object.assign(income, payload);

    if (income.status === Status.RECEIVED) {
      if (!income.amount || !income.paymentDate) {
        throw new BadRequestException(
          'Paid income must have amount and payment date',
        );
      }
    }
    return this.incomeRepository.save(income);
  }
}
