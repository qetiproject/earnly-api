import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Status {
  PENDING = 'pending',
  RECEIVED = 'received',
  FAILED = 'failed',
}

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  project_name!: string;

  @Column({ nullable: true })
  client_name!: string;

  @Column('decimal')
  amount!: number;

  @Column({ default: 'GEL' })
  currency!: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING,
  })
  status!: Status;

  @Column({ nullable: true })
  description!: string;

  @Column({ type: 'date' })
  payment_date!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at!: Date;
}
