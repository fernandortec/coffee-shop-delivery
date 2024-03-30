import { fromOriginalTagToBrTag } from "@repo/schemas/coffee";

import type { Coffee } from "@repo/drizzle";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { CoffeeCardInteractions } from "@/components/coffee-card-interactions";
import Image from "next/image";

interface CoffeeCardProps {
	coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
	const { description, imagePath, name, price, tags } = coffee;

	return (
		<Card className="w-[16rem] bg-base-card border-none rounded-xl rounded-tr-[3rem] rounded-bl-[1.5rem]">
			<CardHeader className="h-[9rem] flex flex-col items-center justify-center">
				<Image
					src={`./coffees/${imagePath}`}
					alt=""
					width={120}
					unoptimized
					height={120}
					className="mt-[-1.850rem] mb-2"
				/>
				<footer className="flex items-center justify-center gap-2">
					{tags.map((tag) => (
						<p
							className="bg-primary-300 text-primary-700 font-bold text-[0.625rem] px-2 py-1 rounded-2xl"
							key={tag}
						>
							{fromOriginalTagToBrTag[tag].toUpperCase()}
						</p>
					))}
				</footer>
			</CardHeader>

			<CardContent className="font-baloo2 text-center">
				<CardTitle className="text-xl text-base-subtitle">{name}</CardTitle>
				<CardDescription className="text-sm text-base-label font-roboto">
					{description}
				</CardDescription>
			</CardContent>
			<CardFooter className="flex justify-between items-end gap-6">
				<CoffeeCardInteractions coffee={coffee} />
			</CardFooter>
		</Card>
	);
}
