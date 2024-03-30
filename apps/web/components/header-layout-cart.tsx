"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";

export function HeaderLayoutCart() {
	const cartStore = useCartStore((state) => state.items);
	const lengthOfItemsInCart = cartStore.length;

	return (
		<Button size="icon" variant="default" className="relative">
			{lengthOfItemsInCart > 0 && (
				<p className="absolute top-[-0.5rem] right-[-0.5rem] w-5 h-5 bg-primary-700 text-white rounded-full">
					{lengthOfItemsInCart}
				</p>
			)}
			<ShoppingCart weight="fill" size={22} />
		</Button>
	);
}
