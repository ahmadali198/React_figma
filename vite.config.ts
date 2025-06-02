import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean) as PluginOption[],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist', // Standard output directory for production builds
    sourcemap: false, // Generally not needed for end-users, can be enabled if you need to debug production issues
    rollupOptions: {
      // You can configure manual chunks here if you want more control over splitting
      // output: {
      //   manualChunks: (id) => {
      //     if (id.includes('node_modules')) {
      //       return 'vendor';
      //     }
      //   },
      // },
    },
    // Optional: Adjust chunk size warning limit if you are aware of the sizes
    // chunkSizeWarningLimit: 750,
  },
}));