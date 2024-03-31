"use client";

import { AddressBlock } from "@/(order)/finish-order/_components/address-block";
import { PaymentBlock } from "@/(order)/finish-order/_components/payment-block";
import { Form } from "@/root/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	type OrderCoffeeSchema,
	orderCoffeeSchema,
} from "@repo/schemas/coffee";
import { type SubmitHandler, useForm } from "react-hook-form";

export function OrderForm() {
	const form = useForm<OrderCoffeeSchema>({
		resolver: zodResolver(orderCoffeeSchema),
		defaultValues: {
			city: "",
			state: "",
			street: "",
			number: 0,
			district: "",
			complement: "",
			payment: "CREDIT_CARD",
		},
	});

	const finishOrder: SubmitHandler<OrderCoffeeSchema> = (data) => {
		console.log(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(finishOrder)}>
				<AddressBlock />
				<PaymentBlock />
			</form>
		</Form>
	);
}
