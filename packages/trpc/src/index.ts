import { coffeesRouter } from "@/routers/coffees";
import { mergeRouters } from "@/trpc";

export const appRouter = mergeRouters(coffeesRouter);
export type AppRouter = typeof appRouter;
