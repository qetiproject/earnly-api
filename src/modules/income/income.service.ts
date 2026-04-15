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

  async findAll(page: number, limit: number): Promise<Income[]> {
    return await this.incomeRepository.find({
      order: { createdAt: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  create(payload: AddIncomeDto): Promise<Income> {
    const income = this.incomeRepository.create(payload);
    this.validateIncome(income);
    return this.incomeRepository.save(income);
  }

  async update(id: number, payload: Partial<UpdateIncomeDto>): Promise<Income> {
    const income = await this.findOneOrThrow(id);

    income.projectName = payload.projectName ?? income.projectName;
    income.clientName = payload.clientName ?? income.clientName;
    income.amount = payload.amount ?? income.amount;
    income.currency = payload.currency ?? income.currency;
    income.status = payload.status ?? income.status;
    income.description = payload.description ?? income.description;
    income.paymentDate = payload.paymentDate
      ? new Date(payload.paymentDate)
      : income.paymentDate;

    this.validateIncome(income);
    return this.incomeRepository.save(income);
  }

  async removeIncome(id: number): Promise<void> {
    const income = await this.incomeRepository.findOneBy({ id });
    if (!income) {
      throw new NotFoundException(`Income with id ${id} not found`);
    }
    await this.incomeRepository.remove(income);
  }

  private async findOneOrThrow(id: number): Promise<Income> {
    const income = await this.incomeRepository.findOneBy({ id });

    if (!income) {
      throw new NotFoundException(`Income with id ${id} not found`);
    }

    return income;
  }

  private validateIncome(income: Income): void {
    if (income.status === Status.RECEIVED) {
      if (!income.amount || !income.paymentDate) {
        throw new BadRequestException(
          'Paid income must have amount and payment date',
        );
      }
    }
  }
}
