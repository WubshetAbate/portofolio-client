import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Only for local development
      "/api": {
        target: "http://localhost:5001", // Local backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
  define: {
    // Optional: expose env variables if needed
    "process.env": process.env,
  },
});
