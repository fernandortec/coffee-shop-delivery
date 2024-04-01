import type { OrderCoffeeSchema } from "@repo/schemas/coffee";
import { create } from "zustand";

export interface PurchasesStore {
	currentPurchase: OrderCoffeeSchema | null;
	setCurrentPurchase: (purchase: OrderCoffeeSchema) => void;
}

export const usePurchasesStore = create<PurchasesStore>((set) => ({
	currentPurchase: null,
	setCurrentPurchase: (purchase) => set(() => ({ currentPurchase: purchase })),
}));
