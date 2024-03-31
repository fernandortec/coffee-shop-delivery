"use client";

import { SelectedCoffeeCard } from "@/(order)/finish-order/_components/selected-coffee-card";
import { useCartStore } from "@/root/store/cart-store";

export function SelectedCoffees() {
	const coffeesInCart = useCartStore((state) => state.items)

	return (
		<aside className="w-[28rem] bg-base-card rounded-r-xl">
			<section className="p-10">
				{coffeesInCart.map(coffee => (
					<SelectedCoffeeCard key={coffee.id} />
				))}
			</section>
		</aside>
	);
}
