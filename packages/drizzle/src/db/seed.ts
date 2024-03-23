import { db } from "@/db/connection";
import { coffees } from "@/db/schemas";

await db.delete(coffees);

await db.insert(coffees).values([
	{
		name: "Expresso Tradicional",
		description: "O tradicional café feito com água quente e grãos moídos",
		price: 9,
		imagePath: "expresso.png",
		tags: ["traditional"],
	},
	{
		name: "Expresso Americano",
		description: "Expresso diluído, menos intenso que o tradicional",
		price: 9.9,
		imagePath: "american.png",
		tags: ["traditional"],
	},
	{
		name: "Expresso Cremoso",
		description: "Café expresso tradicional com espuma cremosa",
		price: 9.9,
		imagePath: "creamy-expresso.png",
		tags: ["traditional"],
	},
	{
		name: "Expresso Gelado",
		description: "Bebida preparada com café expresso e cubos de gelo",
		price: 9.9,
		imagePath: "iced-coffee.png",
		tags: ["traditional", "iced"],
	},
	{
		name: "Café com Leite",
		description: "Meio a meio de expresso tradicional com leite vaporizado",
		price: 9.9,
		imagePath: "coffee-with-milk.png",
		tags: ["traditional", "with_milk"],
	},
	{
		name: "Latte",
		description:
			"Uma dose de café expresso com o dobro de leite e espuma cremosa ",
		price: 9.9,
		imagePath: "latte.png",
		tags: ["traditional", "with_milk"],
	},
	{
		name: "Capuccino",
		description:
			"Bebida com canela feita de doses iguais de café, leite e espuma",
		price: 9.9,
		imagePath: "capuccino.png",
		tags: ["traditional", "with_milk"],
	},
	{
		name: "Macchiato",
		description:
			"Café expresso misturado com um pouco de leite quente e espuma",
		price: 9.9,
		imagePath: "macchiato.png",
		tags: ["traditional", "with_milk"],
	},
	{
		name: "Mocaccino",
		description: "Café expresso com calda de chocolate, pouco leite e espuma",
		price: 9.9,
		imagePath: "mocchiano.png",
		tags: ["traditional", "with_milk"],
	},
	{
		name: "Chocolate quente",
		description: "Bebida feita com chocolate dissolvido no leite quente e café",
		price: 9.9,
		imagePath: "hot-chocolate.png",
		tags: ["special", "with_milk"],
	},
	{
		name: "Cubano",
		description:
			"Drink gelado de café expresso com rum, creme de leite e hortelã",
		price: 9.9,
		imagePath: "cuban.png",
		tags: ["special", "alcoholic", "iced"],
	},
	{
		name: "Havaiano",
		description: "Bebida adocicada preparada com café e leite de coco",
		imagePath: "hawaiian.png",
		price: 9.9,
		tags: ["special"],
	},
	{
		name: "Árabe",
		description: "Bebida preparada com grãos de café arabe e especiarias",
		imagePath: "arab.png",
		price: 9.9,
		tags: ["special"],
	},
	{
		name: "Irlandês",
		description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
		imagePath: "irish.png",
		price: 9.9,
		tags: ["special", "alcoholic"],
	},
]);

console.log("✔️ Coffees inserted successfully");

process.exit();
