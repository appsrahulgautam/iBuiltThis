import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import "dotenv/config";

//todo must do a check if database is set
if (typeof window !== "undefined") {
  throw new Error("Do not import server-side db/index.ts from client code.");
}

if (!process.env.DATABASE_URL) {
  throw new Error("Database url has not been set yet. Check index.ts");
}
// console.log("DATABASE_URL =", process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL!);

// //todo export the db const for other files to use
export const db = drizzle({ client: sql });

//todo steps to seed data
//1. pnpm tsx db/index.ts
//2. pnpm tsx db/seed.ts
