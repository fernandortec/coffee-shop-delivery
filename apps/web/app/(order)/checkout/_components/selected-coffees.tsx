"use client";

import { SelectedCoffeeCard } from "@/(order)/checkout/_components/selected-coffee-card";
import { Button } from "@/root/components/ui/button";
import { ScrollArea } from "@/root/components/ui/scroll-area";
import { FormatToLocalCurrency } from "@/root/helpers/format-local-currency";
import { useCartStore } from "@/root/store/cart-store";

export function SelectedCoffees() {
	const coffeesInCart = useCartStore((state) => state.items);

	const priceOfAllCoffeesInCart = coffeesInCart.reduce((acc, currentItem) => {
		return acc + currentItem.price * currentItem.quantity;
	}, 0);

	const shippingCost = 5.5;

	return (
		<aside className="w-[28.5rem] bg-base-card rounded rounded-tr-[2.75rem] rounded-bl-[2.75rem] p-10  mt-4">
			<section>
				<ScrollArea className="h-[16rem] px-2">
					{coffeesInCart.map((coffee) => (
						<SelectedCoffeeCard key={coffee.id} coffee={coffee} />
					))}
				</ScrollArea>
			</section>
			<div className="flex flex-col gap-3">
				<p className="w-full flex justify-between items-center text-base-text">
					<span className="text-sm">Total de items</span>
					<span className="ml-full">
						{FormatToLocalCurrency(priceOfAllCoffeesInCart)}
					</span>
				</p>
				<p className="w-full flex justify-between items-center text-base-text">
					<span className="text-sm">Entrega</span>
					<span className="ml-full">{FormatToLocalCurrency(shippingCost)}</span>
				</p>
				<p className="w-full flex justify-between items-center text-base-subtitle font-bold text-xl">
					<span className="">Total</span>
					<span className="ml-full">
						{FormatToLocalCurrency(priceOfAllCoffeesInCart + shippingCost)}
					</span>
				</p>
			</div>
			<footer className="mt-6">
				<Button type="submit" className="w-full h-[3rem]" variant="default">
					COMFIRMAR PEDIDO
				</Button>
			</footer>
		</aside>
	);
}
