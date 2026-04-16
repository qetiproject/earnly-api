import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { Currency, Status } from '../income.entity';

export class AddIncomeDto {
  @ApiProperty({ example: 'test project' })
  @IsString()
  @MaxLength(120)
  projectName!: string;

  @ApiProperty({ example: 'First Name', required: false })
  @IsString()
  @MaxLength(120)
  clientName!: string;

  @ApiProperty({ example: 1000, type: Number })
  @Type(() => Number)
  @IsNumber()
  @Min(0.01)
  amount!: number;

  @ApiProperty({ enum: Currency, example: Currency.USD })
  @IsEnum(Currency)
  currency!: Currency;

  @ApiProperty({ enum: Status, example: Status.PENDING })
  @IsEnum(Status)
  status!: Status;

  @ApiProperty({ example: 'students management app', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @ApiProperty({ example: '2026-04-09' })
  @IsDateString()
  paymentDate!: string;
}
