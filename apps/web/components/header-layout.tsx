import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";

import { HeaderLayoutCart } from "@/root/components/header-layout-cart";
import { Button } from "@/root/components/ui/button";
import logo from "@/root/public/assets/logo.svg";

import Image from "next/image";
import Link from "next/link";

export function HeaderLayout() {
	return (
		<header className="px-60 py-8 flex items-center justify-between container8">
			<Link href="/">
				<Image alt="" src={logo} width={85} height={40} priority={true} />
			</Link>
			<div className="flex gap-4">
				<Button
					variant="secondary"
					className="flex gap-1 bg-secondary-300 text-secondary-500 hover:bg-secondary-500 hover:text-white"
				>
					<MapPin weight="fill" size={22} />
					Porto Alegre, RS
				</Button>
				<Link href="/checkout">
					<HeaderLayoutCart />
				</Link>
			</div>
		</header>
	);
}
