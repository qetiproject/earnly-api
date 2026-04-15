import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Income } from './src/modules/income/income.entity';

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Income],
  migrations: ['src/database/migrations/*.ts'],
});
