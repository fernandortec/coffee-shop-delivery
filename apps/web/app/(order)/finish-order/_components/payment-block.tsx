import { Button } from "@/root/components/ui/button";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/root/components/ui/form";
import { RadioGroup } from "@/root/components/ui/radio-group";

import {
	Bank,
	CreditCard,
	CurrencyDollar,
	Money,
} from "@phosphor-icons/react/dist/ssr";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import type { OrderCoffeeSchema } from "@repo/schemas/coffee";

import { useFormContext } from "react-hook-form";

const payments = [
	{
		label: "CARTÂO DE CRÉDITO",
		value: "CREDIT_CARD",
		icon: CreditCard,
	},
	{
		label: "CARTÂO DE DÉBITO",
		value: "DEBIT_CARD",
		icon: Bank,
	},
	{
		label: "DINHEIRO",
		value: "CASH",
		icon: Money,
	},
];

export function PaymentBlock() {
	const { control } = useFormContext<OrderCoffeeSchema>();

	return (
		<section className="bg-base-card w-[40rem] p-10 mt-4 rounded">
			<header className="flex items-start gap-2">
				<CurrencyDollar size={22} className="text-secondary-500" />
				<p className="text-base text-base-subtitle">
					Pagamanto <br />{" "}
					<span className="text-base-text">
						O pagamento é feito na entrega. Escolha a forma que deseja pagar
					</span>
				</p>
			</header>
			<div className="flex  items-center mt-[3.25rem] gap-2">
				<FormField
					control={control}
					name="payment"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className="flex space-y-1"
								>
									{payments.map((payment) => (
										<FormItem
											className="flex items-center space-x-3 space-y-0"
											key={payment.value}
										>
											<FormControl>
												<RadioGroupPrimitive.Item value={payment.value} asChild>
													<Button
														type="button"
														variant="secondary"
														className={`
															h-[3.25rem] w-[11.5rem]
															flex items-center gap-3 justify-start
															p-4 text-xs text-base-text 
															${
																field.value === payment.value &&
																"border border-secondary-500 bg-secondary-300"
															}
														`}
													>
														<payment.icon className="w-4 h-4 text-secondary-500" />
														{payment.label}
													</Button>
												</RadioGroupPrimitive.Item>
											</FormControl>
										</FormItem>
									))}
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</div>
		</section>
	);
}
