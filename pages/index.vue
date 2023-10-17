<template>
  <div class="group relative h-screen">
    <img
      :src="`${config.public.cdn}lyacos-foundation-bw.webp`"
      alt="dimitri lyacos"
      class="object-cover h-full w-full -z-10 brightness-75 md:brightness-50 contrast-150 group-hover:contrast-100 transition duration-300" />
    <div class="absolute top-0 left-0 flex flex-col items-center justify-around z-0 w-full h-full">
      <div class="text-center group-hover:translate-y-12 transform-gpu transition duration-500">
        <h1 class="text-3xl lg:text-6xl font-light text-gray-50/70">Dimitris Lyacos</h1>
        <h2 class="text-white text-4xl lg:text-7xl uppercase font-extrabold -mt-3">Foundation</h2>
      </div>
      <LayoutTheHeader @toggle-mobile="store.toggleMobile()" :is-home="true" />
      <div class="group-hover:-translate-y-12 transform-gpu transition duration-500">
        <NuxtLink
          to="/the-foundation"
          class="text-white text-xl lg:text-3xl font-semibold px-6 py-3 border-2 border-inherit group-hover:border-primary"
          >About the foundation</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useLayoutStore } from '~/store/layouts';

definePageMeta({
  layout: false,
});

const config = useRuntimeConfig();
const store = useLayoutStore();

useSeoMeta({
  title: 'Dimitris Lyacos Foundation',
  description: 'The official website of the Dimitris Lyacos Foundation',
  ogTitle: 'Dimitris Lyacos Foundation',
  ogDescription: 'The official website of the Dimitris Lyacos Foundation',
  ogImage: `${config.public.cdn}lyacos-foundation-bw.jpeg`,
  ogUrl: 'https://lyacosfoundation.org',
});
</script>
