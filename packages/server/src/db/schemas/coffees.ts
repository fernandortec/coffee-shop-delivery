import { InferSelectModel, sql } from "drizzle-orm";
import {
	doublePrecision,
	pgTable,
	text,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

export const tagsEnum = [
	"traditional",
	"iced",
	"with_milk",
	"special",
	"alcoholic",
] as const;

export const coffees = pgTable("coffes", {
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
	tags: text("tags", { enum: tagsEnum }).array().notNull(),
	name: varchar("name", { length: 50 }).notNull(),
	description: text("description").notNull(),
	price: doublePrecision("price").notNull(),
	imagePath: text("image_url").notNull(),
});

export type Coffee = InferSelectModel<typeof coffees>;
