
import localFont from 'next/font/local'
import { Baloo_2 } from "next/font/google";

export const baloo2ExtraBold = localFont({
	src: "../public/Baloo2-ExtraBold.ttf",
	weight: "900",
	display: "swap",
	variable: "--font-baloo2-extrabold",
});

export const baloo2 = Baloo_2({
	weight: ["700", "800"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-baloo2",
});
