<template>
  <section class="px-4 py-20 w-full">
    <div class="group flex flex-col items-center justify-center">
      <h2 class="text-gray-950 text-4xl lg:text-7xl uppercase font-extrabold">The Premisses</h2>
      <p class="bg-gray-800 w-6 h-1 group-hover:w-16 group-hover:-skew-y-3 transition-all duration-300 my-2"></p>
    </div>
  </section>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
useSeoMeta({
  title: 'The Premisses | Dimitris Lyacos Foundation',
  description: 'The Premisses of the Dimitris Lyacos Foundation',
  ogTitle: 'The Premisses| Dimitris Lyacos Foundation',
  ogDescription: 'The Premisses of the Dimitris Lyacos Foundation',
  ogImage: `${config.public.cdn}tr:w-1230,h-630/lyacos-foundation.webp`,
  ogUrl: 'https://lyacos.org/foundation/the-premisses',
});
</script>
