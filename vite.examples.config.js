import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// Determine if we're building for production or development
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],
  root: "./examples",
  build: {
    outDir: "../examples-dist",
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          config: path.resolve(__dirname, "./examples/tailwind.config.js"),
        }),
        autoprefixer(),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./examples"),
    },
  },
  server: {
    port: 3000,
  },
  // Use the repository name as base path only in production build
  base: isProduction ? "/audio-visualizer/" : "/", // This should match your repository name
});