import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
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
