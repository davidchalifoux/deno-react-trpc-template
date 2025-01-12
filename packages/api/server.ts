import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createContext } from "./context.ts";
import { appRouter } from "./router.ts";

// TODO: Update with your domain
const ALLOWED_ORIGINS = ["*"];

async function handler(request: Request) {
  if (request.method === "OPTIONS") {
    // Configures CORS to allow calling from other origins
    // Browsers will first call with OPTIONS to confirm
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", ALLOWED_ORIGINS.join(","));
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    return new Response(undefined, { headers, status: 204 });
  }

  const response = await fetchRequestHandler({
    endpoint: "/rpc",
    req: request,
    router: appRouter,
    createContext: createContext,
  });

  // Include CORS headers in regular response
  response.headers.set(
    "Access-Control-Allow-Origin",
    ALLOWED_ORIGINS.join(","),
  );
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");

  return response;
}

Deno.serve(handler);
