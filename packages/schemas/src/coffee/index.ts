import type { tagsEnum } from "@repo/drizzle";

export const fromOriginalTagToBrTag: {
	[key in (typeof tagsEnum)[number]]: string;
} = {
	alcoholic: "Alcóolico",
	iced: "Gelado",
	special: "Especial",
	traditional: "Tradicional",
	with_milk: "Com leite",
};
