"use client";

import { fromOriginalTagToBrTag } from "@repo/schemas/coffee";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/app/components/ui/card";

import type { Coffee } from "@repo/drizzle";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr/ShoppingCart";
import { Button } from "@repo/ui";
import Image from "next/image";

export function CoffeeCard({
	coffee: { description, imagePath, name, price, tags },
}: { coffee: Coffee }) {
	return (
		<Card className="w-[16rem] bg-base-card border-none rounded-tr-[3rem] rounded-bl-[1.5rem]">
			<CardHeader className="h-[9rem] flex items-center justify-center">
				<Image
					src={`./coffees/${imagePath}`}
					alt=""
					width={120}
					unoptimized
					height={120}
					className="mt-[-1.850rem] mb-1"
				/>
				<footer className="flex items-center justify-center gap-2">
					{tags.map((tag) => (
						<p
							className="bg-primary-200 text-primary-700 font-bold text-[0.625rem] px-2 py-1 rounded-2xl"
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
			<CardFooter className={"flex justify-between items-end gap-6"}>
				<p className="text-base-text text-sm">
					R${" "}
					<span className={"text-2xl font-baloo2-extrabold"}>
						{price.toFixed(2)}
					</span>
				</p>
				<div className="flex gap-2 items-end">
					<div className="bg-base-button h-[2.375rem] w-16 flex items-center justify-center gap-2 rounded-md px-">
						<span className="text-secondary-500 cursor-pointer"> - </span>
						<span>1</span>
						<span className="text-secondary-500 cursor-pointer"> + </span>
					</div>
					<Button variant="icon" size="icon">
						<ShoppingCart size={22} weight="fill" />
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
