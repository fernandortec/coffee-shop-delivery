import { Button } from "@/root/components/ui/button";
import { Card, CardContent, CardFooter } from "@/root/components/ui/card";
import { Separator } from "@/root/components/ui/separator";
import type { CoffeeInStore } from "@/root/store/cart-store";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface SelectedCoffeeCardProps {
	coffee: CoffeeInStore;
}

export function SelectedCoffeeCard({ coffee }: SelectedCoffeeCardProps) {
	const priceInCurrency = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(coffee.price);

	return (
		<Card className="bg-transparent border-0 shadow-none">
			<CardContent className="flex justify-between items-start px-1">
				<div className="h-12 flex items-start gap-5">
					<Image
						alt=""
						width="64"
						height="64"
						src={`/coffees/${coffee.imagePath}`}
					/>
					<div className="flex flex-col gap-2">
						<p className="text-base-subtitle">{coffee.name}</p>
						<div className="flex items-center gap-2">
							<div className="bg-base-button h-[2.375rem] w-16 flex items-center justify-center gap-2 rounded-md px-">
								<button
									className="text-secondary-500 cursor-pointer"
									type="button"
								>
									-
								</button>
								<span>{coffee.quantity}</span>
								<button
									className="text-secondary-500 cursor-pointer"
									type="button"
								>
									+
								</button>
							</div>
							<Button className="h-[2.375rem]" variant="secondary">
								<Trash size={16} className="text-secondary-500 mr-1" />
								REMOVER
							</Button>
						</div>
					</div>
				</div>
				<p className="font-bold text-base-text">{priceInCurrency}</p>
			</CardContent>
			<CardFooter className="my-6">
				<Separator className="bg-base-button" />
			</CardFooter>
		</Card>
	);
}
