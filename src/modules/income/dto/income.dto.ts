import { Status } from '../income.entity';

export class incomeDto {
  id!: number;

  project_name!: string;

  client_name!: string;

  amount!: number;

  currency!: string;

  status!: Status;

  description!: string;

  payment_date!: Date;

  created_at!: Date;

  updated_at!: Date;
}
