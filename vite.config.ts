import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  // BASE_PATH is set only by the GitHub Pages workflow (e.g. "/akashbr/").
  // Local dev and other hosts (e.g. Netlify) keep serving from "/".
  const env = loadEnv(mode, ".", "");
  return {
    base: env.BASE_PATH || "/",
    plugins: [react(), tailwindcss()],
  };
});
