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
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ResponseDto } from 'src/shared/dto/response.dto';
import { ApiResponse } from 'src/shared/shell/api.response';
import { ApiVoidResponse } from 'src/shared/shell/api.void.response';
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
  @ApiResponse(Income)
  async getAllIncomes(): Promise<ResponseDto<Income[]>> {
    const data = await this.incomeService.findAll();
    return {
      success: true,
      message: 'Incomes retrieved successfully',
      data,
    };
  }

  @Post()
  @ApiOperation({ summary: 'Create income' })
  @ApiBody({ type: AddIncomeDto })
  @ApiResponse(Income)
  async addincome(@Body() payload: AddIncomeDto): Promise<ResponseDto<Income>> {
    const data = await this.incomeService.create(payload);
    return {
      success: true,
      message: 'Income created successfully',
      data,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update income' })
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiBody({ type: UpdateIncomeDto })
  @ApiResponse(Income)
  async updateIncome(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: Partial<UpdateIncomeDto>,
  ): Promise<ResponseDto<Income>> {
    const data = await this.incomeService.update(id, payload);
    return {
      success: true,
      message: 'Income updated successfully',
      data,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete income' })
  @ApiParam({ name: 'id', type: Number, example: 1 })
  @ApiVoidResponse()
  async removeIncome(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseDto<null>> {
    await this.incomeService.removeIncome(id);

    return {
      success: true,
      message: 'Income deleted successfully',
      data: null,
    };
  }
}
