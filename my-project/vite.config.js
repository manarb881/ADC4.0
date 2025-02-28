import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-countdown": "react-countdown/dist/index.js", // Ensure correct path if needed
    },
  },
  build: {
    rollupOptions: {
      external: ["react-countdown"], // Explicitly externalize if needed (rare)
    },
  },
});