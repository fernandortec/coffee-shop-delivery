import { z } from "zod";

const envSchema = z.object({
	DATABASE_URL: z.string().url().min(1),
	GITHUB_ID: z.string(),
	GITHUB_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
