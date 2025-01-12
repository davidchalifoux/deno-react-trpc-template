import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import deno from "@deno/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [deno(), TanStackRouterVite({}), react()],
});