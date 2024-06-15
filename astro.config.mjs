import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
  site: 'https://travelDemo_Astro.github.io',
  base: 'https://github.com/Kecatoca/travelDemo_Astro.git',
});