import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
    resolve: {
        alias: [{ find: "@assets", replacement: resolve(__dirname, "assets/") }],
    },
});
