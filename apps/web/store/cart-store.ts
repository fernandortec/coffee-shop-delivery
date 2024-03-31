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
				return {
					items: [
						...state.items.filter((storedItem) => storedItem === item),
						{ ...item, quantity: item.quantity + 1 },
					],
				};
			}

			return { items: [...state.items, item] };
		}),
	removeItem: (id: string) =>
		set((state) => {
			const existingItem = state.items.find((item) => item.id === id);
			if (!existingItem) return { items: state.items };

			if (existingItem?.quantity > 0)
				return {
					items: [
						...state.items.filter((item) => item !== existingItem),
						{ ...existingItem, quantity: existingItem.quantity - 1 },
					],
				};

			return { items: state.items.filter((item) => item !== existingItem) };
		}),
}));
