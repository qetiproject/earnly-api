import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Income } from './src/modules/income/income.entity';
import { User } from './src/modules/user/user.entity';

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Income, User],
  migrations: ['src/database/migrations/*.ts'],
});
