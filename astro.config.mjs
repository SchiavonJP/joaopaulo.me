import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({ 
  site: "https://joaopaulo.me",
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  output: 'server',
  adapter: netlify(),
});
