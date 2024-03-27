"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { type ReactNode, useState } from "react";
import { trpc } from "trpc/client";

export function Providers({ children }: { children: ReactNode }) {
	const [queryClient] = useState(() => new QueryClient({}));
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [httpBatchLink({ url: "http://localhost:3000/api/trpc" })],
		}),
	);

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</trpc.Provider>
	);
}
