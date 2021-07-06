import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { join, resolve } from 'path';

const outherConfigs = {
  logging: true,
  entities: [
    resolve(__dirname, '..', 'modules', '**', 'entity', '*.entity.{ts,js}'),
  ],
  migrations: [resolve(__dirname, '..', 'migrations', '*.{ts,js}')],
  cli: {
    migrationsDir: join('src', 'database', 'migrations'),
  },
};

const typeOrmOptions: TypeOrmModuleOptions[] = [
  {
    type: 'sqlite',
    database: join('src', 'database', 'database.sqlite'),
    ...outherConfigs,
  },
  {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ...outherConfigs,
  },
];

export default typeOrmOptions;
