<template>
  <div>
    <div class="group relative h-80 lg:h-[40vh]">
      <img
        :src="`${config.public.cdn}lyacos-foundation-bw.webp`"
        alt="dimitri lyacos"
        class="object-cover h-full w-full -z-10 brightness-50 contrast-150 group-hover:contrast-100 transition duration-300" />
      <div class="absolute top-0 left-0 flex flex-col items-center justify-center lg:justify-around z-0 w-full h-full">
        <div class="text-center translate-y-8 group-hover:translate-y-12 transform-gpu transition duration-500">
          <h1 class="text-3xl lg:text-6xl font-light text-gray-50/70">Dimitris Lyacos</h1>
          <h2 class="text-white text-4xl lg:text-7xl uppercase font-extrabold -mt-3">Foundation</h2>
        </div>
        <LayoutTheHeader @toggle-mobile="store.toggleMobile()" :is-home="false" />
      </div>
    </div>

    <slot />
    <LayoutTheFooter />
  </div>
</template>
<script setup lang="ts">
import { useLayoutStore } from '~/store/layouts';
useHead({
  bodyAttrs: {
    class: ``,
  },
});
const store = useLayoutStore();
const config = useRuntimeConfig();
</script>
