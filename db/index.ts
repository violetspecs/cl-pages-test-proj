import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  username: text('username'),
  password: text('password')
}, (users) => ({
  usernameIdx: uniqueIndex('usernameIdx').on(users.username),
})
);

export const countries = sqliteTable('countries', {
    id: integer('id').primaryKey(),
    name: text('name'),
  }, (countries) => ({
    nameIdx: uniqueIndex('nameIdx').on(countries.name),
  })
);