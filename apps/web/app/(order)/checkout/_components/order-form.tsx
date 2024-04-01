"use client";

import { AddressBlock } from "@/(order)/checkout/_components/address-block";
import { PaymentBlock } from "@/(order)/checkout/_components/payment-block";
import { SelectedCoffees } from "@/(order)/checkout/_components/selected-coffees";
import { Form } from "@/root/components/ui/form";
import { usePurchasesStore } from "@/root/store/purchases-store";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	type OrderCoffeeSchema,
	orderCoffeeSchema,
} from "@repo/schemas/coffee";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

export function OrderForm() {
	const router = useRouter();
	const addPurchaseToStore = usePurchasesStore(
		(state) => state.setCurrentPurchase,
	);

	const form = useForm<OrderCoffeeSchema>({
		resolver: zodResolver(orderCoffeeSchema),
		defaultValues: {
			city: "",
			state: "",
			street: "",
			number: 300,
			district: "",
			complement: "",
			payment: "CREDIT_CARD",
		},
	});

	const finishOrder: SubmitHandler<OrderCoffeeSchema> = (data) => {
		addPurchaseToStore(data);

		router.refresh();
		router.push("/completed");
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(finishOrder)}
				className="px-20 py-10 flex gap-8"
			>
				<div>
					<h1 className="text-lg font-baloo2 font-bold">Complete seu pedido</h1>
					<AddressBlock />
					<PaymentBlock />
				</div>
				<div>
					<h1 className="text-lg font-baloo2 font-bold">Cafés selecionados</h1>
					<SelectedCoffees />
				</div>
			</form>
		</Form>
	);
}
