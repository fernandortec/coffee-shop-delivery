import { create } from "zustand";

interface CartItem {
	id: string;
	name: string;
	imagePath: string;
	price: number;
}

interface CartStore {
	items: CartItem[];
	addItem: (item: CartItem) => void;
	removeItem: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
	items: [],
	addItem: (item: CartItem) =>
		set((state) => ({ items: [...state.items, item] })),
	removeItem: (id: string) =>
		set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
}));
