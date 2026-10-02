import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration: the React plugin lets Vite understand JSX.
// "base" is the folder the site lives in. On GitHub Pages the site is at
// https://suhaimaishfaq.github.io/my-portfolio/ so the base must be "/my-portfolio/".
// GITHUB_ACTIONS is only set when GitHub builds the site, so on your own
// computer (npm run dev) the site still opens at http://localhost:5173/
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? "/my-portfolio/" : "/",
});
