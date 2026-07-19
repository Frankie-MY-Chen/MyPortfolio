import { defineConfig } from "vite";
import { resolve } from "path";

// package.json 是 "type": "module"，所以用 import.meta.dirname 取代 CJS 專屬的 __dirname
const root = import.meta.dirname;

// 多頁面網站：除了 index.html，其餘每個頁面都要在這裡列出，
// 否則 `vite build` 預設只會打包 index.html，其他頁面在正式環境會 404。
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        attendance: resolve(root, "project-attendance.html"),
        mahjong: resolve(root, "project-mahjong.html"),
        works: resolve(root, "works-overview.html"),
      },
    },
  },
});
