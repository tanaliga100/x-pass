import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
dotenv.config();
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT),
  },
  define: {
    "process.env.PORT": `"${process.env.PORT}"`,
    "process.env.VITE_API_URL": `"${process.env.VITE_API_URL}"`,
  },
});
