import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr/ShoppingCart";
import { Button } from "@repo/ui/button";
import Image from "next/image";
import logo from "../../public/logo.svg";

export function HeaderLayout() {
	return (
		<header className="px-40 flex items-center justify-between container py-8">
			<Image alt="" src={logo} width={85} height={40} priority={true} />
			<div className="flex gap-4">
				<Button variant="secondary" className="flex gap-1">
					<MapPin weight="fill" size={22} />
					Porto Alegre, RS
				</Button>
				<Button
					size="icon"
					className="bg-primary-200 text-primary-700 hover:bg-primary-200"
				>
					<ShoppingCart weight="fill" size={22} />
				</Button>
			</div>
		</header>
	);
}
