import {
	Bank,
	CreditCard,
	CurrencyDollar,
	Money,
} from "@phosphor-icons/react/dist/ssr";
import type { OrderCoffeeSchema } from "@repo/schemas/coffee";
import { Button } from "components/ui/button";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "components/ui/form";
import { type MouseEvent, useState } from "react";
import { type ControllerRenderProps, useFormContext } from "react-hook-form";

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
	const [activeButton, setActiveButton] = useState<string | null>(null);

	const { control } = useFormContext<OrderCoffeeSchema>();

	const handleChoosePayment = (
		e: MouseEvent<HTMLButtonElement>,
		field: ControllerRenderProps<OrderCoffeeSchema, "payment">,
	) => {
		const buttonValue = (e.target as HTMLButtonElement).value;
		setActiveButton(buttonValue);

		field.onChange(e);
	};

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
			<div className="flex items-center mt-[3.25rem] gap-2">
				{payments.map((payment) => (
					<FormField
						control={control}
						name="payment"
						key={payment.value}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Button
										type="button"
										variant="secondary"
										value={payment.value}
										className={`
											h-[3.25rem] w-[11.5rem]
											flex items-center gap-3 justify-start
											p-4 text-xs text-base-text
											${
												activeButton === payment.value &&
												"border border-secondary-500 bg-secondary-300"
											}
										`}
										onClick={(e) => handleChoosePayment(e, field)}
									>
										<payment.icon className="w-4 h-4 text-secondary-500" />
										{payment.label}
									</Button>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
			</div>
		</section>
	);
}
