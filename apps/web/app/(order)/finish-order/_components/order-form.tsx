"use client";

import { AddressBlock } from "@/(order)/finish-order/_components/address-block";
import { PaymentBlock } from "@/(order)/finish-order/_components/payment-block";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import {
	type OrderCoffeeSchema,
	orderCoffeeSchema,
} from "@repo/schemas/coffee";
import { type SubmitHandler, useForm } from "react-hook-form";

export function OrderForm() {
	const form = useForm<OrderCoffeeSchema>({
		resolver: zodResolver(orderCoffeeSchema),
	});

	const finishOrder: SubmitHandler<OrderCoffeeSchema> = () => {};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(finishOrder)}>
				<AddressBlock />
				<PaymentBlock />
			</form>
		</Form>
	);
}
