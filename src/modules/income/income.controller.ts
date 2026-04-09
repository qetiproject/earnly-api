import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddIncomeDto } from './dto/add-income.dto';
import { Income } from './income.entity';
import { IncomeService } from './income.service';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Get()
  getAllIncomes(): Promise<Income[]> {
    return this.incomeService.findAll();
  }

  @Post('/add')
  addincome(@Body() payload: AddIncomeDto): Promise<Income> {
    return this.incomeService.create(payload);
  }
}
