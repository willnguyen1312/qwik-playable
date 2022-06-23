import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { resolve } from 'path';
import netlifyEdge from '@netlify/vite-plugin-netlify-edge';

export default defineConfig(() => {
  return {
    
    plugins: [
      qwikCity({
        pagesDir: resolve('src', 'pages'),
        layouts: {
          default: resolve('src', 'layouts', 'default', 'default.tsx'),
        },
      }),
      qwikVite({ ssr: { outDir: '.netlify/edge-functions/entry.netlify' } }),
      netlifyEdge({ functionName: 'entry.netlify' }),
    ],
  };
});
