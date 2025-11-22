import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()], // Ensure your React plugin is here

  // *** This is the required fix for the @/ alias ***
  resolve: {
    alias: {
      // This maps '@/' to the absolute path of your '/src' directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
