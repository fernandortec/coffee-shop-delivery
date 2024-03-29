"use client";

import { Form } from "@/components/ui/form";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { useForm } from "react-hook-form";

export function OrderForm() {
	const form = useForm();
	const finishOrder = () => {};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(finishOrder)}>
				<main className="bg-base-card w-[40rem] p-10 mt-4 rounded">
					<header className="flex items-start gap-2">
						<MapPin size={22} className="text-primary-500" />
						<p className="text-base text-base-subtitle">
							Endereço de entrega <br />{" "}
							<span className="text-base-text">
								Informe o endereço onde deseja receber seu pedido
							</span>
						</p>
					</header>
				</main>
			</form>
		</Form>
	);
}
