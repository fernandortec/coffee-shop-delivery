import { create } from "zustand";

export interface CoffeeInStore {
	id: string;
	name: string;
	price: number;
	quantity: number;
	imagePath: string;
}

interface CartStore {
	items: CoffeeInStore[];
	addItem: (item: CoffeeInStore) => void;
	removeItem: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
	items: [
		{
			id: "67370a12-634c-4c9e-8618-3336b6d6f072",
			imagePath: "capuccino.png",
			name: "Expresso Americano",
			price: 9.9,
			quantity: 1,
		},
	],
	addItem: (item: CoffeeInStore) =>
		set((state) => {
			return {
				items: [
					...state.items.filter((storedItem) => storedItem.id !== item.id),
					item,
				],
			};
		}),
	removeItem: (id: string) =>
		set((state) => {
			return {
				items: state.items.filter((item) => item.id !== id),
			};
		}),
}));
