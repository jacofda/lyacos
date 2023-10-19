import app from './config/app';
import build from './config/build';
import css from './config/css';
import devtools from './config/devtools';
import experimental from './config/experimental';
import googleFonts from './config/googleFonts';
import partytown from './config/partytown';
import modules from './config/modules';
import nitro from './config/nitro';
import postcss from './config/postcss';
import routeRules from './config/routeRules';
import runtimeConfig from './config/runtimeConfig';

export default defineNuxtConfig({
  app,
  build,
  css,
  devtools,
  experimental,
  googleFonts,
  modules,
  nitro,
  partytown,
  postcss,
  routeRules,
  runtimeConfig,
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
