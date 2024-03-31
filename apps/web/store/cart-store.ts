import { create } from "zustand";

interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
	imagePath: string;
}

interface CartStore {
	items: CartItem[];
	addItem: (item: CartItem) => void;
	removeItem: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
	items: [],
	addItem: (item: CartItem) =>
		set((state) => {
			if (state.items.find((storedItem) => storedItem === item)) {
				return { items: state.items };
			}

			return { items: [...state.items, item] };
		}),
	removeItem: (id: string) =>
		set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));
