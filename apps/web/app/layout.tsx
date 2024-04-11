import "@/root/public/global.css";

import { HeaderLayout } from "@/root/components/header-layout";
import { Providers } from "@/root/lib/providers";
import { baloo2, baloo2ExtraBold, roboto } from "@/root/public/fonts";
import type { Metadata } from "next";

import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "Coffee shop delivery",
	description: "Saboreie dos cafés mais deliciosos da região, peça o seu agora!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className={`${roboto.variable} ${baloo2.variable} ${baloo2ExtraBold.variable}`}
		>
			<link rel="icon" href="/assets/coffee-cup.svg" sizes="any" />
			<body>
				<HeaderLayout />
				<Providers>
					<div className="px-40">{children}</div>
				</Providers>
				<Toaster richColors />
			</body>
		</html>
	);
}
