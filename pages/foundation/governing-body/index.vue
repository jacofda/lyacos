<template>
  <section class="px-4 py-20 w-full">
    <div class="group flex flex-col items-center justify-center">
      <h2 class="text-gray-950 text-4xl lg:text-7xl uppercase font-extrabold">Board of Trustees</h2>
      <p class="bg-gray-800 w-6 h-1 group-hover:w-16 group-hover:-skew-y-3 transition-all duration-300 my-2"></p>
      <h1 class="text-2xl md:text-4xl lg:text-6xl font-thin text-gray-950">Advisors and Honorary Members</h1>
    </div>
  </section>

  <div class="bg-gray-50 dark:bg-gray-800 py-20">
    <div class="container mx-auto px-6 md:px-12 xl:px-32 mb-12">
      <div class="grid items-center gap-12 md:grid-cols-3">
        <template v-for="item in items.filter(i => i.order === 1)">
          <div></div>
          <ElementsTheCard :item="item" />
          <div></div>
        </template>
      </div>
    </div>

    <div class="container mx-auto px-6 md:px-12 xl:px-32">
      <div class="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-4">
        <template v-for="item in items.filter(i => i.order > 1 && i.order < 8)">
          <ElementsTheCard :item="item" />
        </template>
      </div>
    </div>
  </div>

  <section class="px-4 py-20 w-full">
    <div class="group flex flex-col items-center justify-center">
      <h2 class="text-gray-950 text-4xl lg:text-7xl uppercase font-extrabold">Executive Board</h2>
      <p class="bg-gray-800 w-6 h-1 group-hover:w-16 group-hover:-skew-y-3 transition-all duration-300 my-2"></p>
    </div>
  </section>

  <div class="bg-gray-50 dark:bg-gray-800 py-20">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
      <div class="grid items-center gap-12 md:grid-cols-3 lg:grid-cols-4">
        <template v-for="item in items.filter(i => i.order > 7)">
          <ElementsTheCard :item="item" />
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { items } from '@/data/team';
const config = useRuntimeConfig();

useSeoMeta({
  title: 'Governing Body | Dimitris Lyacos Foundation',
  description: 'Governing Body of the Dimitris Lyacos Foundation',
  ogTitle: 'Governing Body | Dimitris Lyacos Foundation',
  ogDescription: 'Governing Body of the Dimitris Lyacos Foundation',
  ogImage: `${config.public.cdn}tr:w-1230,h-630/lyacos-foundation.webp`,
  ogUrl: 'https://lyacos.org/foundation/governing-body',
});
</script>
