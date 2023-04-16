import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        global: "globalThis",
        "process.env": {},
    },
    server: {
        port: 3000,
    },
    define: {
        'process.env': {},
    },
    build: {
        rollupOptions: {
            plugins: [
                nodePolyfills(),
            ],
        },
    },
});