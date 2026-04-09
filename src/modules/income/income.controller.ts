import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AddIncomeDto } from './dto/add-income.dto';
import { Income } from './income.entity';
import { IncomeService } from './income.service';

@ApiTags('income')
@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all incomes' })
  getAllIncomes(): Promise<Income[]> {
    return this.incomeService.findAll();
  }

  @Post('/add')
  @ApiOperation({ summary: 'Create income' })
  @ApiBody({ type: AddIncomeDto })
  @ApiCreatedResponse({ description: 'Income created', type: Income })
  addincome(@Body() payload: AddIncomeDto): Promise<Income> {
    return this.incomeService.create(payload);
  }
}
