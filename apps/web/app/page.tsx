import {
	Coffee,
	Package,
	ShoppingCart,
	Timer,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import coffeeCup from "@/root/public/coffee-cup.svg";
import { CoffeeCard } from "@/root/components/coffee-card";
import { cn } from "@/root/lib/utils";
import { baloo2 } from "@/root/public/fonts";
import { serverClient } from "@/root/trpc/server";

export default async function Page() {
	const coffees = await serverClient.getCoffess();

	return (
		<div className="mt-32">
			<section className={"flex justify-between gap-16 relative"}>
				<Image
					alt=""
					src="/home-background.png"
					width={10000}
					height={10000}
					className="absolute top-0 blur-2xl"
					style={{ width: "auto", height: "auto" }}
				/>
				<aside>
					<h1 className={cn("text-5xl w-full", baloo2.className)}>
						Encontre o café perfeito <br /> para qualquer hora do dia
					</h1>
					<p className="mt-4 text-xl ">
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>

					<ul className="grid grid-cols-2 gap-x-16 gap-y-5 mt-16">
						<li className="flex items-center gap-3">
							<span className="h-8 w-8 flex items-center justify-center text-white bg-primary-700 rounded-full">
								<ShoppingCart weight="fill" size={16} />
							</span>
							Compra simples e segura
						</li>

						<li className="flex items-center gap-3">
							<span className="h-8 w-8 flex items-center justify-center bg-base-text text-white rounded-full">
								<Package weight="fill" size={16} />
							</span>
							Embalagem mantém o café intacto
						</li>
						<li className="flex items-center gap-3">
							<span className="h-8 w-8 flex items-center justify-center text-white bg-primary-500 rounded-full">
								<Timer weight="fill" size={16} />
							</span>
							Entrega rápida e rastreada
						</li>
						<li className="flex items-center gap-3">
							<span className="h-8 w-8 flex items-center justify-center text-white bg-secondary-500 rounded-full">
								<Coffee weight="fill" size={16} />
							</span>
							O café chega fresquinho até você
						</li>
					</ul>
				</aside>

				<Image
					alt=""
					src={coffeeCup}
					style={{ width: "auto", height: "360px" }}
					width={476}
					height={360}
					priority={true}
				/>
			</section>

			<h2 className={"text-[2rem] mt-20 font-baloo2"}>Nossos cafés</h2>
			<main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-y-10 gap-x-8">
				{coffees.map((coffee) => (
					<CoffeeCard key={coffee.id} coffee={coffee} />
				))}
			</main>
		</div>
	);
}
