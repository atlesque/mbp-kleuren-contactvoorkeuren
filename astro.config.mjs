import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { port: 8510 },
  output: 'static',
  integrations: [
    icon({
      include: {
        lucide: ['sun', 'moon', 'monitor'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
