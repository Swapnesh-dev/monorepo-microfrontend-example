import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        remote: "https://monorepoexample.netlify.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "tailwindcss"],
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    target: "esnext",
  },
  preview: {
    port: 3002,
  },
});
