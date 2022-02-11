import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '13.125.244.11',
  port: 5432,
  username: 'ksh_todo',
  password: '1234',
  database: 'todo',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
