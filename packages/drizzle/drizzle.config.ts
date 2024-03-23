import { Config } from "drizzle-kit";
import { env } from "../env";

export default {
	schema: "./src/db/schemas/index.ts",
	out: "./drizzle",
	driver: "pg",
	dbCredentials: {
		connectionString: env.DATABASE_URL,
	},
} satisfies Config;
