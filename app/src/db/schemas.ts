import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";


export const responses = sqliteTable("responses", {
  id: int('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  message: text('message').notNull(),
});