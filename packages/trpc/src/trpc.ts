import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const createTPRCRouter = t.router;
export const publicProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;
export const mergeRouters = t.mergeRouters;
