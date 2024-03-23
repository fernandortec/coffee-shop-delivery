import { env } from "@/env";
import { Config } from "drizzle-kit";

export default {
	schema: "./src/server/db/schemas/index.ts",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: env.DATABASE_URL,
	},
} satisfies Config;
