import { join } from "path";
import pkg from "./package.json";

// https://nitro.unjs.io/config
export default defineNitroConfig({
  noPublicDir: true,
  serveStatic: false, // 🔥 THIS FIXES YOUR ERROR

  compatibilityDate: "2025-04-20",
  srcDir: "./src",

  runtimeConfig: {
    version: pkg.version
  },

  alias: {
    "@": join(__dirname, "src")
  }
});
