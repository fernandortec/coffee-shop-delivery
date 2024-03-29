import { z } from "zod";

export const orderCoffeeSchema = z.object({
	street: z.string(),
	number: z.coerce.number(),
	complement: z.string().optional(),
	district: z.string(),
	city: z.string(),
	state: z.string().length(2),
	payment: z.enum(["CREDIT_CARD", "DEBIT_CARD", "CASH"]),
});

export type OrderCoffeeSchema = z.infer<typeof orderCoffeeSchema>;
