import { MapPin } from "@phosphor-icons/react/dist/ssr";
import type { OrderCoffeeSchema } from "@repo/schemas/coffee";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import { useFormContext } from "react-hook-form";

export function AddressBlock() {
	const { control } = useFormContext<OrderCoffeeSchema>();

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
			<div className="space-y-4 mt-8">
				<FormField
					control={control}
					name="street"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input {...field} placeholder="Rua" size="fill" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex items-center gap-4 w-full">
					<FormField
						control={control}
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
						control={control}
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
						control={control}
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
						control={control}
						name="city"
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
						control={control}
						name="state"
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
			</div>
		</main>
	);
}
