import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      out: 'build'
    }),
    alias: {
      $components: "src/lib/components",
      $stores: "src/lib/stores",
      $utils: "src/lib/utils",
      $assets: "src/assets",
      $lib: "src/lib",
    },
  },
};

export default config;
