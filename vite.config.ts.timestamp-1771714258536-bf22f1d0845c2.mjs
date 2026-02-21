// vite.config.ts
import { defineConfig } from "file:///C:/Rizky/portofolio/web-porto/web-portofolio-frontend/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Rizky/portofolio/web-porto/web-portofolio-frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///C:/Rizky/portofolio/web-porto/web-portofolio-frontend/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    postcss: "./postcss.config.cjs"
  },
  assetsInclude: ["**/*.pdf"],
  build: {
    // Mobile optimization
    target: "es2015",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"]
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          vendor: ["vue", "vue-router"],
          icons: ["lucide-vue-next", "@fortawesome/fontawesome-free"],
          utils: ["aos"]
        }
      }
    },
    // Reduce chunk size for mobile
    chunkSizeWarningLimit: 1e3,
    // Enable source maps for debugging but keep them small
    sourcemap: false
  },
  server: {
    host: true,
    port: 2002,
    strictPort: true,
    fs: {
      strict: false
    }
  },
  // Performance optimizations
  optimizeDeps: {
    include: ["vue", "vue-router", "lucide-vue-next"],
    exclude: ["@fortawesome/fontawesome-free"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxSaXpreVxcXFxwb3J0b2ZvbGlvXFxcXHdlYi1wb3J0b1xcXFx3ZWItcG9ydG9mb2xpby1mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcUml6a3lcXFxccG9ydG9mb2xpb1xcXFx3ZWItcG9ydG9cXFxcd2ViLXBvcnRvZm9saW8tZnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1Jpemt5L3BvcnRvZm9saW8vd2ViLXBvcnRvL3dlYi1wb3J0b2ZvbGlvLWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdnVlKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczogJy4vcG9zdGNzcy5jb25maWcuY2pzJ1xuICB9LFxuICBhc3NldHNJbmNsdWRlOiBbJyoqLyoucGRmJ10sXG4gIGJ1aWxkOiB7XG4gICAgLy8gTW9iaWxlIG9wdGltaXphdGlvblxuICAgIHRhcmdldDogJ2VzMjAxNScsXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsXG4gICAgICAgIHB1cmVfZnVuY3M6IFsnY29uc29sZS5sb2cnXVxuICAgICAgfVxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIC8vIFNwbGl0IHZlbmRvciBsaWJyYXJpZXNcbiAgICAgICAgICB2ZW5kb3I6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInXSxcbiAgICAgICAgICBpY29uczogWydsdWNpZGUtdnVlLW5leHQnLCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUnXSxcbiAgICAgICAgICB1dGlsczogWydhb3MnXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBSZWR1Y2UgY2h1bmsgc2l6ZSBmb3IgbW9iaWxlXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuICAgIC8vIEVuYWJsZSBzb3VyY2UgbWFwcyBmb3IgZGVidWdnaW5nIGJ1dCBrZWVwIHRoZW0gc21hbGxcbiAgICBzb3VyY2VtYXA6IGZhbHNlXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IHRydWUsXG4gICAgcG9ydDogMjAwMixcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIGZzOiB7XG4gICAgICBzdHJpY3Q6IGZhbHNlXG4gICAgfVxuICB9LFxuICAvLyBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25zXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAnbHVjaWRlLXZ1ZS1uZXh0J10sXG4gICAgZXhjbHVkZTogWydAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZSddXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJWLFNBQVMsb0JBQW9CO0FBQ3hYLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWUsV0FBVztBQUZ3TCxJQUFNLDJDQUEyQztBQUs1USxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDO0FBQUEsRUFDZixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLGVBQWUsQ0FBQyxVQUFVO0FBQUEsRUFDMUIsT0FBTztBQUFBO0FBQUEsSUFFTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxlQUFlO0FBQUEsUUFDZixZQUFZLENBQUMsYUFBYTtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBO0FBQUEsVUFFWixRQUFRLENBQUMsT0FBTyxZQUFZO0FBQUEsVUFDNUIsT0FBTyxDQUFDLG1CQUFtQiwrQkFBK0I7QUFBQSxVQUMxRCxPQUFPLENBQUMsS0FBSztBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSx1QkFBdUI7QUFBQTtBQUFBLElBRXZCLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixJQUFJO0FBQUEsTUFDRixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLE9BQU8sY0FBYyxpQkFBaUI7QUFBQSxJQUNoRCxTQUFTLENBQUMsK0JBQStCO0FBQUEsRUFDM0M7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
