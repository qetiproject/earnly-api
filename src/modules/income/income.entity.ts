import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Status {
  PENDING = 'pending',
  RECEIVED = 'received',
  FAILED = 'failed',
}

export enum Currency {
  GEL = 'GEL',
  USD = 'USD',
  EUR = 'EUR',
}

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'project_name' })
  projectName!: string;

  @Column({ name: 'client_name' })
  clientName!: string;

  @Column('decimal')
  amount!: number;

  @Column({
    type: 'enum',
    enum: Currency,
    default: Currency.GEL,
  })
  currency!: Currency;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING,
  })
  status!: Status;

  @Column()
  description!: string;

  @Column({ name: 'payment_date', type: 'date' })
  paymentDate!: Date;

  @Column({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt!: Date;
}
