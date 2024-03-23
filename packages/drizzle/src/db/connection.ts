import postgres from "postgres";

import { drizzle } from "drizzle-orm/postgres-js";

import { env } from "@/env";
import * as schemas from "./schemas";

const connection = postgres(env.DATABASE_URL);

export const db = drizzle(connection, { schema: schemas });
