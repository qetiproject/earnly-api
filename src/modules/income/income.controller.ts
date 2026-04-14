import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AddIncomeDto } from './dto/add-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { Income } from './income.entity';
import { IncomeService } from './income.service';

@ApiTags('income')
@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all incomes' })
  @ApiOkResponse({
    description: 'List of incomes',
    type: Income,
    isArray: true,
  })
  getAllIncomes(): Promise<Income[]> {
    return this.incomeService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create income' })
  @ApiBody({ type: AddIncomeDto })
  @ApiCreatedResponse({ description: 'Income created', type: Income })
  addincome(@Body() payload: AddIncomeDto): Promise<Income> {
    return this.incomeService.create(payload);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update income' })
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiBody({ type: UpdateIncomeDto })
  @ApiOkResponse({ type: Income })
  updateIncome(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: Partial<UpdateIncomeDto>,
  ): Promise<Income> {
    return this.incomeService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete income' })
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiOkResponse({ description: 'Income deleted' })
  async removeIncome(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.incomeService.removeIncome(id);
  }
}
