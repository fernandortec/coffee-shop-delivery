import postgres from "postgres";

import { drizzle } from "drizzle-orm/postgres-js";

import { env } from "@repo/env";
import * as schemas from "./db/schemas";

const connection = postgres(env.DATABASE_URL);

export const db = drizzle(connection, { schema: schemas });
export * from "./db/schemas";
