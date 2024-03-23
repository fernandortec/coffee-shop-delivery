import { createTPRCRouter, publicProcedure } from "@/trpc";
import { coffees, db } from "@repo/drizzle";

export const coffeesRouter = createTPRCRouter({
	getCoffess: publicProcedure.query(async () => {
		const coffeesList = await db.select().from(coffees);
		return coffeesList;
	}),
});
