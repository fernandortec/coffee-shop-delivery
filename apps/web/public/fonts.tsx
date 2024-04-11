
import localFont from 'next/font/local'
import { Baloo_2, Roboto } from "next/font/google";

export const baloo2ExtraBold = localFont({
	src: "../public/baloo2-extra-bold.ttf",
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


export const roboto = Roboto({
	weight: ["700", "400"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
});
