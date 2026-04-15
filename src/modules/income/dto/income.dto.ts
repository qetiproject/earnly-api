import { Currency, Status } from '../income.entity';

export class IncomeDto {
  id!: number;

  projectName!: string;

  clientName?: string;

  amount!: number;

  currency!: Currency;

  status!: Status;

  description?: string;

  paymentDate!: Date;

  createdAt!: Date;

  updatedAt!: Date;
}
