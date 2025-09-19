import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if(!process.env.DATABASE_URL){

    throw new Error("NO process.env.DATABASE_URL found");
}
export default defineConfig({
  dialect: "sqlite",
  dbCredentials:{
url: process.env.DATABASE_URL
  },

  schema: "./app/src/db/schemas.ts",
  out: "./app/src/db/migrations",
})