<template>
  <div class="group relative h-screen">
    <img
      :src="`${config.public.cdn}lyacos-foundation.webp`"
      alt="dimitri lyacos"
      class="object-cover h-full w-full -z-10 brightness-75 contrast-125 group-hover:brightness-100 group-hover:contrast-100 transition duration-300" />
    <div class="absolute top-0 left-0 flex flex-col items-center justify-around z-0 w-full h-full">
      <div class="text-center group-hover:translate-y-12 transform-gpu transition duration-500">
        <h1 class="text-3xl lg:text-6xl font-light text-gray-50/70">Dimitris Lyacos</h1>
        <h2 class="text-white text-4xl lg:text-7xl uppercase font-extrabold -mt-3">Foundation</h2>
      </div>
      <LayoutTheHeader @toggle-mobile="store.toggleMobile()" :is-home="true" />
      <div class="group-hover:-translate-y-12 transform-gpu transition duration-500">
        <NuxtLink
          to="/foundation/purpose"
          class="text-white text-xl lg:text-3xl font-semibold px-6 py-3 border-2 border-inherit group-hover:border-primary"
          >About the Foundation</NuxtLink
        >
      </div>
    </div>
    <div
      class="absolute bottom-0 w-full h-20 p-2 md:p-8 text-gray-300 opacity-50 hover:opacity-75 font-light text-sm text-center flex flex-row items-center justify-between gap-2 md:gap-8 transition duration-300">
      <NuxtLink to="/privacy-policy" class="hover:text-white transition duration-300">Privacy Policy</NuxtLink>
      <p class="hover:text-white transition duration-300">© DLFoundation 2023</p>
      <a href="https://www.lyacos.net" target="_BLANK" class="hover:text-white transition duration-300"
        >Official Website</a
      >
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
  ogImage: `${config.public.cdn}tr:w-1230,h-630/lyacos-foundation.webp`,
  ogUrl: 'https://lyacos.org',
});
</script>
