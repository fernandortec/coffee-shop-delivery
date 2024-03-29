"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(finishOrder)}
					className="space-y-4 mt-8"
				>
					<FormField
						control={form.control}
						name="street"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input {...field} placeholder="Rua" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex items-center gap-4 w-full">
						<FormField
							control={form.control}
							name="number"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input {...field} placeholder="Número" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="complement"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormControl>
										<Input
											{...field}
											placeholder="Complemento"
											size="fill"
											optional
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="flex items-center gap-4 w-full">
						<FormField
							control={form.control}
							name="district"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input {...field} placeholder="Bairro" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="complement"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormControl>
										<Input {...field} placeholder="Cidade	" size="fill" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="complement"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input {...field} placeholder="UF" size="xs" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</form>
			</Form>
		</main>
	);
}
