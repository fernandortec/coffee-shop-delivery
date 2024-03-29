import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CurrencyDollar, Money } from "@phosphor-icons/react/dist/ssr";
import type { OrderCoffeeSchema } from "@repo/schemas/coffee";
import { useFormContext } from "react-hook-form";

export function PaymentBlock() {
	const { control } = useFormContext<OrderCoffeeSchema>();

	return (
		<section className="bg-base-card w-[40rem] p-10 mt-4 rounded	">
			<header className="flex items-start gap-2">
				<CurrencyDollar size={22} className="text-secondary-500" />
				<p className="text-base text-base-subtitle">
					Pagamanto <br />{" "}
					<span className="text-base-text">
						O pagamento é feito na entrega. Escolha a forma que deseja pagar
					</span>
				</p>
			</header>
		</section>
	);
}
