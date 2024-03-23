CREATE TABLE IF NOT EXISTS "coffes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tags" text[] NOT NULL,
	"name" varchar(50) NOT NULL,
	"description" text NOT NULL,
	"price" double precision NOT NULL,
	"image_url" text NOT NULL
);
