import "server-only";

import { appRouter, createCallerFactory } from "@repo/trpc";

export const serverClient = createCallerFactory(appRouter)({});
