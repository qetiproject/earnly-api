import { IsDateString, IsEnum, IsNumber, IsString } from 'class-validator';
import { Status } from '../income.entity';

export enum Currency {
  GEL = 'GEL',
  USD = 'USD',
  EUR = 'EUR',
}

export class AddIncomeDto {
  @IsString()
  project_name!: string;

  @IsString()
  client_name!: string;

  @IsNumber()
  amount!: number;

  @IsEnum(Currency)
  currency!: Currency;

  @IsEnum(Status)
  status!: Status;

  @IsString()
  description!: string;

  @IsDateString()
  payment_date!: string;
}
