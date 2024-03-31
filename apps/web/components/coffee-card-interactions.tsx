"use client";

import { Button } from "@/root/components/ui/button";
import { useCartStore } from "@/root/store/cart-store";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import type { Coffee } from "@repo/drizzle";
import { useState } from "react";
import { toast } from "sonner";

interface CoffeeCardInteractionsProps {
	coffee: Coffee;
}

export function CoffeeCardInteractions({
	coffee,
}: CoffeeCardInteractionsProps) {
	const addItemToCart = useCartStore((state) => state.addItem);
	const [coffeesToBuyQuantity, setCoffeesToBuyQuantity] = useState(1);

	const handleIncreaseCoffeesQuantity = () => {
		setCoffeesToBuyQuantity((state) => state + 1);
	};

	const handleDecreaseCoffeesQuantity = () => {
		setCoffeesToBuyQuantity((state) => {
			if (state === 0) return 0;
			return state - 1;
		});
	};

	const handleAddToCart = () => {
		const { id, name, imagePath, price } = coffee;

		addItemToCart({
			id,
			imagePath,
			name,
			price,
			quantity: coffeesToBuyQuantity,
		});
		toast.success("Item adicionado com sucesso");
	};

	return (
		<>
			<p className="text-base-text text-sm">
				R${" "}
				<span className={"text-2xl font-baloo2-extrabold"}>
					{coffee.price.toFixed(2)}
				</span>
			</p>
			<div className="flex gap-2 items-end">
				<div className="bg-base-button h-[2.375rem] w-16 flex items-center justify-center gap-2 rounded-md px-">
					<button
						className="text-secondary-500 cursor-pointer"
						type="button"
						onClick={handleDecreaseCoffeesQuantity}
					>
						-
					</button>
					<span>{coffeesToBuyQuantity}</span>
					<button
						className="text-secondary-500 cursor-pointer"
						type="button"
						onClick={handleIncreaseCoffeesQuantity}
					>
						+
					</button>
				</div>
				<Button
					variant="icon"
					size="icon"
					type="button"
					onClick={handleAddToCart}
				>
					<ShoppingCart size={22} weight="fill" />
				</Button>
			</div>
		</>
	);
}
