import { Card, CardContent } from "@/root/components/ui/card";

export function SelectedCoffeeCard() {
	return (
		<Card className="bg-transparent border-0 shadow-none">
			<CardContent className="flex justify-center items-start">
				<p>Expresso tradicional</p>
			</CardContent>
		</Card>
	);
}
