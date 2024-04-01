import Image from "next/image";

import sideImage from "@/root/public/assets/man-on-bike.svg";
import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react/dist/ssr";

export default function Page() {
	return (
		<main className="px-40 py-20">
			<h1 className="text-[2rem] text-primary-700 font-baloo2">
				Uhu! Pedido confirmado
			</h1>
			<p className="text-base-subtitle text-xl">
				Agora é só aguardar que logo o café chegará até você
			</p>

			<section className="flex items-center w-full justify-between">
				<div className="h-[17rem] w-[33rem] rounded-md bg-gradient-to-r from-primary-500 to-secondary-500 p-[1.7px] rounded-tr-[2.25rem] rounded-bl-[2.25rem]">
					<div className="h-full w-full rounded-md bg-white rounded-tr-[2.25rem] p-10 rounded-bl-[2.25rem] flex flex-col gap-8 ">
						<div className="flex items-center gap-3 h-[2.625rem]">
							<span className="h-8 w-8 flex items-center justify-center bg-secondary-500 text-white rounded-full">
								<MapPin weight="fill" size={16} />
							</span>
							<p className="text-base-text">
								Entrega em{" "}
								<span className="font-semibold">
									Rua João Daniel Martinelli, 102
								</span>
								<br />
								Farrapos - Porto Alegre, RS
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
								<span className="font-semibold">Cartão de crédito</span>
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
