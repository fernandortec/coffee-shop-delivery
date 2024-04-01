import Image from "next/image";

import sideImage from "@/root/public/assets/man-on-bike.svg";

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
				<div>Entrega em abuble</div>
				<aside>
					<Image alt="" src={sideImage} width="492" height="293" />
				</aside>
			</section>
		</main>
	);
}
