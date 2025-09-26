import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://inaquitechos.netlify.app",
  integrations: [
    tailwind(),
    sitemap(),
    partytown({
      config: {
        forward: ["gtag"],
      },
    }),
    react(),
  ],
});
