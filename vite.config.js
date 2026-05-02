import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // IMPORTANT: Change 'portfolio' to your GitHub repo name
    // e.g. if your repo is github.com/sagar/my-portfolio, set base: '/my-portfolio/'
    base: "/sagars6250.github.io/",
});
