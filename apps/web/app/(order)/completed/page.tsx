"use client";

import Image from "next/image";

import sideImage from "@/root/public/assets/man-on-bike.svg";
import { usePurchasesStore } from "@/root/store/purchases-store";
import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react/dist/ssr";
import type { OrderCoffeeSchema } from "@repo/schemas/coffee";

const fromPaymentToLocalName: {
	[key in OrderCoffeeSchema["payment"]]: string;
} = {
	CASH: "Dinheiro",
	CREDIT_CARD: "Cartão de crédito",
	DEBIT_CARD: "Cartão de débito",
};

export default function Page() {
	const currentPurchase = usePurchasesStore((state) => state.currentPurchase);

	return (
		<main className="px-40 py-20">
			<h1 className="text-[2rem] text-primary-700 font-baloo2">
				Uhu! Pedido confirmado
			</h1>
			<p className="text-base-subtitle text-xl">
				Agora é só aguardar que logo o café chegará até você
			</p>

			<section className="flex items-center w-full justify-between mt-10">
				<div className="w-[33rem] rounded-md bg-gradient-to-r from-primary-500 to-secondary-500 p-[2px] rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
					<div className="h-full w-full rounded-sm bg-white rounded-tr-[2.10rem] p-10 rounded-bl-[2.16rem] flex flex-col gap-8 ">
						<div className="flex items-center gap-3 h-[2.625rem]">
							<span className="h-8 w-8 flex items-center justify-center bg-secondary-500 text-white rounded-full">
								<MapPin weight="fill" size={16} />
							</span>
							<p className="text-base-text">
								Entrega em{" "}
								<span className="font-semibold">
									{currentPurchase?.street}, {currentPurchase?.number}
								</span>
								<br />
								{currentPurchase?.district} - {currentPurchase?.city},{" "}
								{currentPurchase?.state}
							</p>
						</div>
						<div className="flex items-center gap-3 h-[2.625rem]">
							<span className="h-8 w-8 flex items-center justify-center bg-primary-500 text-white rounded-full">
								<Clock weight="fill" size={16} />
							</span>
							<p className="text-base-text">
								Previsão de entrega <br />
								<span className="font-semibold">20min - 30min</span>
							</p>
						</div>

						<div className="flex items-center gap-3 h-[2.625rem]">
							<span className="h-8 w-8 flex items-center justify-center bg-primary-700 text-white rounded-full">
								<CurrencyDollar weight="fill" size={16} />
							</span>
							<p className="text-base-text">
								Pagamento na entrega <br />
								<span className="font-semibold">
									{fromPaymentToLocalName[currentPurchase?.payment ?? "CASH"]}
								</span>
							</p>
						</div>
					</div>
				</div>
				<aside>
					<Image alt="" src={sideImage} width="492" height="293" />
				</aside>
			</section>
		</main>
	);
}
