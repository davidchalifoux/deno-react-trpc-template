import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./router.ts";

export const api = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8000/rpc",
    }),
  ],
});
