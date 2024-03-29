import { OrderForm } from "@/(order)/finish-order/_components/order-form";

export default function Page() {
	return (
		<div className="px-20 py-10">
			<h1 className="text-lg font-baloo2 font-bold">Complete seu pedido</h1>
			<OrderForm />
		</div>
	);
}
