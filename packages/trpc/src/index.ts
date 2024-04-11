import { coffeesRouter } from "./routers/coffees";
import { createCallerFactory, mergeRouters } from "./trpc";

export const appRouter = mergeRouters(coffeesRouter);
export type AppRouter = typeof appRouter;

export { createCallerFactory };
