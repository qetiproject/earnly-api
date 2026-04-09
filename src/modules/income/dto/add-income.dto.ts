import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDateString, IsEnum, IsNumber, IsString } from 'class-validator';
import { Status } from '../income.entity';

export enum Currency {
  GEL = 'GEL',
  USD = 'USD',
  EUR = 'EUR',
}

export class AddIncomeDto {
  @ApiProperty({ example: 'test project' })
  @IsString()
  project_name!: string;

  @ApiProperty({ example: 'First Name' })
  @IsString()
  client_name!: string;

  @ApiProperty({ example: 1000, type: Number })
  @Type(() => Number)
  @IsNumber()
  amount!: number;

  @ApiProperty({ enum: Currency, example: Currency.USD })
  @IsEnum(Currency)
  currency!: Currency;

  @ApiProperty({ enum: Status, example: Status.PENDING })
  @IsEnum(Status)
  status!: Status;

  @ApiProperty({ example: 'students management app' })
  @IsString()
  description!: string;

  @ApiProperty({ example: '2026-04-09' })
  @IsDateString()
  payment_date!: string;
}
