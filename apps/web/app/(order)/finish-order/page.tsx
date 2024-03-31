import { OrderForm } from "@/(order)/finish-order/_components/order-form";
import { SelectedCoffees } from "@/(order)/finish-order/_components/selected-coffees";

export default function Page() {
	return (
		<div className="px-20 py-10 flex gap-8">
			<div>
				<h1 className="text-lg font-baloo2 font-bold">Complete seu pedido</h1>
				<OrderForm />
			</div>
			<div>
				<h1 className="text-lg font-baloo2 font-bold">Cafés selecionados</h1>
				<SelectedCoffees />
			</div>
		</div>
	);
}
