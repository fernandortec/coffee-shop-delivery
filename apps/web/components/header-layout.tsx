import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";

import { HeaderLayoutCart } from "@/components/header-layout-cart";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo.svg";

import Image from "next/image";

export function HeaderLayout() {
	return (
		<header className="px-60 py-8 flex items-center justify-between container8">
			<Image alt="" src={logo} width={85} height={40} priority={true} />
			<div className="flex gap-4">
				<Button
					variant="secondary"
					className="flex gap-1 bg-secondary-300 text-secondary-500 hover:bg-secondary-500 hover:text-white"
				>
					<MapPin weight="fill" size={22} />
					Porto Alegre, RS
				</Button>
				<HeaderLayoutCart />
			</div>
		</header>
	);
}
