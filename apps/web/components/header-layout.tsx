import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr/ShoppingCart";
import { Button } from "components/ui/button";

import Image from "next/image";
import logo from "../public/logo.svg";

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
				<Button
					size="icon"
					variant="default"
				>
					<ShoppingCart weight="fill" size={22} />
				</Button>
			</div>
		</header>
	);
}
