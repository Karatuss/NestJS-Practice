import { mysqlTable, serial, varchar, int } from 'drizzle-orm/mysql-core';

export const workers = mysqlTable('workers', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  age: int('age'),
});
