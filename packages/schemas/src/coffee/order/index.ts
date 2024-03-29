import { z } from "zod";

export const orderCoffeeSchema = z.object({
	zipcode: z.coerce.string().length(8).transform(Number),
	street: z.string(),
	number: z.coerce.number(),
	complement: z.string().optional(),
	district: z.string(),
	city: z.string(),
	state: z.string().length(2),
});

export type OrderCoffeeSchema = z.infer<typeof orderCoffeeSchema>;
