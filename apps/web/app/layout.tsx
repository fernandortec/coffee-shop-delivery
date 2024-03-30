import "@/public/global.css";

import { HeaderLayout } from "@/components/header-layout";
import { Providers } from "@/lib/providers";
import { baloo2, baloo2ExtraBold, roboto } from "@/public/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
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
			<body>
				<HeaderLayout />
				<Providers>
					<div className="px-40">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
