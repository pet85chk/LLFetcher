// vite.config.js
import { defineConfig, splitVendorChunkPlugin } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.js";
import { crx } from "file:///home/project/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "LLFetcher 3.0+",
  version: "3.0.1",
  description: "Download LinkedIn Learning videos or media files, subtitle, playlist and course assets easily !",
  permissions: [
    "scripting",
    "storage",
    "webNavigation",
    "tabs",
    "cookies",
    "downloads",
    "nativeMessaging"
  ],
  host_permissions: [
    "https://www.linkedin.com/learning/*",
    "http://localhost:5000/*",
    "http://127.0.0.1:5000/*"
  ],
  background: {
    service_worker: "src/background-scripts/background.js"
  },
  content_scripts: [
    {
      js: ["src/content-scripts/main.js"],
      matches: [
        "https://www.linkedin.com/learning/*",
        "http://localhost:5000/*",
        "http://127.0.0.1:5000/*"
      ]
    }
  ],
  options_ui: {
    page: ["src/option/index.html", "src/content-scripts/inject/index.html"],
    open_in_tab: true
  },
  icons: {
    "16": "logo/icon-16.png",
    "19": "logo/icon-19.png",
    "32": "logo/icon-32.png",
    "38": "logo/icon-38.png",
    "48": "logo/icon-48.png",
    "128": "logo/icon-128.png"
  },
  action: {
    default_popup: "src/popup/index.html",
    default_icon: {
      "16": "logo/icon-16.png",
      "19": "logo/icon-19.png",
      "32": "logo/icon-32.png",
      "38": "logo/icon-38.png",
      "48": "logo/icon-48.png",
      "128": "logo/icon-128.png"
    }
  },
  web_accessible_resources: [
    {
      matches: [
        "https://www.linkedin.com/*"
      ],
      resources: [],
      use_dynamic_url: true
    }
  ]
};

// vite.config.js
import { nodePolyfills } from "file:///home/project/node_modules/vite-plugin-node-polyfills/dist/index.js";
import path from "path";
var vite_config_default = defineConfig({
  build: {
    minify: false,
    target: "esnext"
  },
  server: {
    hmr: {
      port: 5001
    },
    host: "127.0.0.1",
    port: 5e3
  },
  plugins: [
    react(),
    // splitVendorChunkPlugin(),
    // express({
    //   // the server files export a middleware as default
    //   // this config can be a glob
    //   middlewareFiles: "./src/express/dev-api/router.js",
    //   prefixUrl: "/dev-api",
    // }),
    crx({ manifest: manifest_default }),
    nodePolyfills()
  ],
  rollupOptions: {
    input: {
      // "content-inject": resolve(__dirname, "./src/content-scripts/inject/index.html"),
      // main: resolve(__dirname, 'popup.html'),
      // nested: resolve(__dirname, 'nested/index.html'),
    }
  },
  resolve: {
    alias: {
      "@": path.resolve("./src/"),
      buffer: "rollup-plugin-node-polyfills/polyfills/buffer-es6"
    }
  },
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {}
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAibWFuaWZlc3QuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3Byb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcHJvamVjdC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgc3BsaXRWZW5kb3JDaHVua1BsdWdpbiB9IGZyb20gXCJ2aXRlXCJcblxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiXG5pbXBvcnQgeyBjcnggfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCJcbmltcG9ydCBtYW5pZmVzdCBmcm9tIFwiLi9tYW5pZmVzdC5qc29uXCJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiXG4vLyBpbXBvcnQgZXhwcmVzcyBmcm9tIFwidml0ZS1wbHVnaW4tZXhwcmVzc1wiXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcIm5vZGU6dXJsXCJcbmltcG9ydCB7IG5vZGVQb2x5ZmlsbHMgfSBmcm9tIFwidml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHNcIlxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOntcbiAgICBtaW5pZnk6ZmFsc2UsXG4gICAgdGFyZ2V0OlwiZXNuZXh0XCJcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG1yOiB7XG4gICAgICBwb3J0OiA1MDAxLFxuICAgIH0sXG4gICAgaG9zdDogXCIxMjcuMC4wLjFcIixcbiAgICBwb3J0OiA1MDAwLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICAvLyBzcGxpdFZlbmRvckNodW5rUGx1Z2luKCksXG4gICAgLy8gZXhwcmVzcyh7XG4gICAgLy8gICAvLyB0aGUgc2VydmVyIGZpbGVzIGV4cG9ydCBhIG1pZGRsZXdhcmUgYXMgZGVmYXVsdFxuICAgIC8vICAgLy8gdGhpcyBjb25maWcgY2FuIGJlIGEgZ2xvYlxuICAgIC8vICAgbWlkZGxld2FyZUZpbGVzOiBcIi4vc3JjL2V4cHJlc3MvZGV2LWFwaS9yb3V0ZXIuanNcIixcbiAgICAvLyAgIHByZWZpeFVybDogXCIvZGV2LWFwaVwiLFxuICAgIC8vIH0pLFxuICAgIGNyeCh7IG1hbmlmZXN0IH0pLFxuICAgIG5vZGVQb2x5ZmlsbHMoKSxcbiAgXSxcbiAgcm9sbHVwT3B0aW9uczoge1xuICAgIGlucHV0OiB7XG4gICAgICAvLyBcImNvbnRlbnQtaW5qZWN0XCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2NvbnRlbnQtc2NyaXB0cy9pbmplY3QvaW5kZXguaHRtbFwiKSxcbiAgICAgIC8vIG1haW46IHJlc29sdmUoX19kaXJuYW1lLCAncG9wdXAuaHRtbCcpLFxuICAgICAgLy8gbmVzdGVkOiByZXNvbHZlKF9fZGlybmFtZSwgJ25lc3RlZC9pbmRleC5odG1sJyksXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKFwiLi9zcmMvXCIpLFxuICAgICAgYnVmZmVyOiBcInJvbGx1cC1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMvcG9seWZpbGxzL2J1ZmZlci1lczZcIixcbiAgICB9LFxuICB9LFxuICBkZWZpbmU6IHtcbiAgICAvLyBCeSBkZWZhdWx0LCBWaXRlIGRvZXNuJ3QgaW5jbHVkZSBzaGltcyBmb3IgTm9kZUpTL1xuICAgIC8vIG5lY2Vzc2FyeSBmb3Igc2VnbWVudCBhbmFseXRpY3MgbGliIHRvIHdvcmtcbiAgICBnbG9iYWw6IHt9LFxuICB9LFxufSlcbiIsICJ7XG4gICAgXCJtYW5pZmVzdF92ZXJzaW9uXCI6IDMsXG4gICAgXCJuYW1lXCI6IFwiTExGZXRjaGVyIDMuMCtcIixcbiAgICBcInZlcnNpb25cIjogXCIzLjAuMVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjpcIkRvd25sb2FkIExpbmtlZEluIExlYXJuaW5nIHZpZGVvcyBvciBtZWRpYSBmaWxlcywgc3VidGl0bGUsIHBsYXlsaXN0IGFuZCBjb3Vyc2UgYXNzZXRzIGVhc2lseSAhXCIsXG4gICAgXCJwZXJtaXNzaW9uc1wiOltcbiAgICAgIFwic2NyaXB0aW5nXCIsXCJzdG9yYWdlXCIsXG4gICAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCIsXCJ0YWJzXCIsXCJjb29raWVzXCIsXG4gICAgICAgIFwiZG93bmxvYWRzXCIsIFwibmF0aXZlTWVzc2FnaW5nXCJcbiAgICBdLFxuICAgIFwiaG9zdF9wZXJtaXNzaW9uc1wiOltcbiAgICAgIFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2xlYXJuaW5nLypcIixcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwLypcIixcbiAgICAgIFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwLypcIlxuICAgIF0sXG4gICAgXG4gICAgXCJiYWNrZ3JvdW5kXCI6e1xuICAgICAgXCJzZXJ2aWNlX3dvcmtlclwiIDogXCJzcmMvYmFja2dyb3VuZC1zY3JpcHRzL2JhY2tncm91bmQuanNcIlxuICAgIH0sXG4gICAgXCJjb250ZW50X3NjcmlwdHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJqc1wiOiBbXCJzcmMvY29udGVudC1zY3JpcHRzL21haW4uanNcIl0sXG4gICAgICAgICAgXCJtYXRjaGVzXCI6IFtcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9sZWFybmluZy8qXCIsXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvKlwiLFxuICAgICAgICAgIFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwLypcIl1cbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJvcHRpb25zX3VpXCI6IHtcbiAgICAgIFwicGFnZVwiOiBbXCJzcmMvb3B0aW9uL2luZGV4Lmh0bWxcIixcInNyYy9jb250ZW50LXNjcmlwdHMvaW5qZWN0L2luZGV4Lmh0bWxcIl0sXG4gICAgICBcIm9wZW5faW5fdGFiXCI6IHRydWVcbiAgICB9LFxuICAgIFwiaWNvbnNcIjoge1xuICAgICAgXCIxNlwiOiBcImxvZ28vaWNvbi0xNi5wbmdcIixcbiAgICAgIFwiMTlcIjogXCJsb2dvL2ljb24tMTkucG5nXCIsXG4gICAgICBcIjMyXCI6IFwibG9nby9pY29uLTMyLnBuZ1wiLFxuICAgICAgXCIzOFwiOiBcImxvZ28vaWNvbi0zOC5wbmdcIixcbiAgICAgIFwiNDhcIjogXCJsb2dvL2ljb24tNDgucG5nXCIsXG4gICAgICBcIjEyOFwiOiBcImxvZ28vaWNvbi0xMjgucG5nXCJcbiAgICB9LFxuICAgIFwiYWN0aW9uXCI6IHsgXG4gICAgICBcImRlZmF1bHRfcG9wdXBcIjogXCJzcmMvcG9wdXAvaW5kZXguaHRtbFwiLFxuICAgICAgXCJkZWZhdWx0X2ljb25cIjoge1xuICAgICAgICBcIjE2XCI6IFwibG9nby9pY29uLTE2LnBuZ1wiLFxuICAgICAgICBcIjE5XCI6IFwibG9nby9pY29uLTE5LnBuZ1wiLFxuICAgICAgXCIzMlwiOiBcImxvZ28vaWNvbi0zMi5wbmdcIixcbiAgICAgICAgXCIzOFwiOiBcImxvZ28vaWNvbi0zOC5wbmdcIixcbiAgICAgICAgXCI0OFwiOiBcImxvZ28vaWNvbi00OC5wbmdcIixcbiAgICAgICAgXCIxMjhcIjogXCJsb2dvL2ljb24tMTI4LnBuZ1wiXG4gICAgICB9XG4gICAgfSxcbiAgICBcIndlYl9hY2Nlc3NpYmxlX3Jlc291cmNlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibWF0Y2hlc1wiOiBbXG4gICAgICAgICAgXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vKlwiXG4gICAgICAgIF0sXG4gICAgICAgIFwicmVzb3VyY2VzXCI6IFtcbiAgICAgICAgXSxcbiAgICAgICAgXCJ1c2VfZHluYW1pY191cmxcIjogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfSJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxjQUFjLDhCQUE4QjtBQUU5USxPQUFPLFdBQVc7QUFDbEIsU0FBUyxXQUFXOzs7QUNIcEI7QUFBQSxFQUNJLGtCQUFvQjtBQUFBLEVBQ3BCLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLGFBQWM7QUFBQSxFQUNkLGFBQWM7QUFBQSxJQUNaO0FBQUEsSUFBWTtBQUFBLElBQ1I7QUFBQSxJQUFnQjtBQUFBLElBQU87QUFBQSxJQUN6QjtBQUFBLElBQWE7QUFBQSxFQUNqQjtBQUFBLEVBQ0Esa0JBQW1CO0FBQUEsSUFDakI7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFlBQWE7QUFBQSxJQUNYLGdCQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxpQkFBbUI7QUFBQSxJQUNmO0FBQUEsTUFDRSxJQUFNLENBQUMsNkJBQTZCO0FBQUEsTUFDcEMsU0FBVztBQUFBLFFBQUM7QUFBQSxRQUFzQztBQUFBLFFBQ2xEO0FBQUEsTUFBeUI7QUFBQSxJQUMzQjtBQUFBLEVBQ0o7QUFBQSxFQUNBLFlBQWM7QUFBQSxJQUNaLE1BQVEsQ0FBQyx5QkFBd0IsdUNBQXVDO0FBQUEsSUFDeEUsYUFBZTtBQUFBLEVBQ2pCO0FBQUEsRUFDQSxPQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsUUFBVTtBQUFBLElBQ1IsZUFBaUI7QUFBQSxJQUNqQixjQUFnQjtBQUFBLE1BQ2QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFDQSwwQkFBNEI7QUFBQSxJQUMxQjtBQUFBLE1BQ0UsU0FBVztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFhLENBQ2I7QUFBQSxNQUNBLGlCQUFtQjtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUNGOzs7QURuREYsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxVQUFVO0FBRWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU07QUFBQSxJQUNKLFFBQU87QUFBQSxJQUNQLFFBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUU4sSUFBSSxFQUFFLDJCQUFTLENBQUM7QUFBQSxJQUNoQixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLGVBQWU7QUFBQSxJQUNiLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUlQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsUUFBUTtBQUFBLE1BQzFCLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBO0FBQUE7QUFBQSxJQUdOLFFBQVEsQ0FBQztBQUFBLEVBQ1g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
