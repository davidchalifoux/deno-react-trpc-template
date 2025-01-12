import { initTRPC } from "@trpc/server";
import { z } from "zod";
import type { Context } from "./context.ts";

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  testQuery: t.procedure.query(() => "Hello world!"),
  testMutation: t.procedure.input(z.object({ name: z.string().min(3) }))
    .mutation((args) => `Hello ${args.input.name}!`),
});

export type AppRouter = typeof appRouter;
