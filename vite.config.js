import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ten-repo-cua-ban/", // <-- chỉnh tên repo GitHub của bạn
  plugins: [react()],
});
